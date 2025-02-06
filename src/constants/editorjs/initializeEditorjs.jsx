import { memo, useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import { useDispatch, useSelector } from "react-redux";
import { EDITOR_JS_TOOLS as tools } from "./tools";
import { setBlog } from "@/globalStates/actions/blogActions";

const InitEditorjs = () => {
  const editorjsRef = useRef(null);
  const dispatch = useDispatch();
  const initialContent = useSelector((state) => state.blog.blogDetails.content);
  const [InitEditor, setIntiEditor] = useState(true);

  function initializeEditorjs() {
    editorjsRef.current = new EditorJS({
      placeholder: "write content...",
      tools: tools,
      tunes: ["textVariant"],
      data: initialContent,
      onChange: async () => {
        const data = await editorjsRef.current.save();
        dispatch(setBlog({ content: JSON.parse(JSON.stringify(data)) }));
      },
      holder: "editorjs",
    });
  }

  useEffect(() => {
    if (editorjsRef.current === null && InitEditor) {
      initializeEditorjs();
      setIntiEditor((prev) => !prev);
    }
    // eslint-disable-next-line
  }, []);

  return <div id="editorjs"></div>;
};

export default memo(InitEditorjs);
