import Header from "@editorjs/header";
import NestedList from "@editorjs/nested-list";
import Marker from "@editorjs/marker";
import Underline from "@editorjs/underline";
import Embed from "@editorjs/embed";
import ImageTool from "@editorjs/image";
import TextVariantTune from "@editorjs/text-variant-tune";
import { UploadFiles } from "@/globalStates/actions/filesUploadAction";
import { store } from "@/globalStates";

// const uploadImageByUrl = (e) => {

// };

const uploadImageByFile = async (image) => {
  let formData = new FormData();
  formData.append("file", image);
  const URI = await store.dispatch(UploadFiles(formData));
  if (URI?.data?.success) {
    return {
      success: 1,
      file: {
        ...URI?.data?.data,
      },
    };
  } else {
    return {
      success: 0,
    };
  }
};

export const EDITOR_JS_TOOLS = {
  header: {
    class: Header,
    inlineToolbar: true,
    config: {
      placeholder: "Enter a header",
      levels: [2, 3, 4, 5, 6],
      defaultLevel: 3,
    },
  },
  List: {
    class: NestedList,
    config: {},
    inlineToolbar: true,
  },
  Marker: Marker,
  Underline: Underline,
  embed: Embed,
  textVariant: TextVariantTune,
  image: {
    class: ImageTool,
    config: {
      uploader: {
        uploadByFile: uploadImageByFile,
        // uploadByUrl: uploadImageByUrl
      },
    },
  },
};
