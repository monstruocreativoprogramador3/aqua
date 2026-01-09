import { ContentSectionData } from '@/types/content';

const ContentSection = ({ title, source }: ContentSectionData) => {
  return (
    <section className="max-sm:p-4 py-10 relative">
      <div className={`container mx-auto flex flex-col items-start gap-12`}>
        <h2 className="text-gray-800 text-xl lg:text-2xl max-w-xl">{title}</h2>
        <video
          className="object-cover bg-center -z-0 top-0 left-0 min-w-full min-h-full"
          // autoPlay
          // muted
          // loop
          // playsInline
          controls={true}
        >
          <source src={source} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default ContentSection;
