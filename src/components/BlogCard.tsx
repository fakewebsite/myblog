import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
  onNavigate: (page: string) => void;
}

export function BlogCard({ title, description, imageUrl, slug, onNavigate }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-[16/9] overflow-hidden relative">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent p-4">
          <h3 className="text-white font-bold">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <Button
          onClick={() => onNavigate(slug)}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Read More
        </Button>
      </div>
    </article>
  );
}
