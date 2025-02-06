import ImageElement from "@/components/ImageElement";
import image from "@/assets/image/advertisingImg.png";
const AdvertisingSection = () => {
  return (
    <section className="w-64 bg-gray-50 relative">
      <div className="text-sm sticky top-10">
        <div className="w-full bg-white">
          <ImageElement src={image} className="w-full h-[75dvh] rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default AdvertisingSection;
