import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

interface RelatedPost {
  title: string;
  slug: string;
}

interface BlogPostProps {
  title: string;
  bannerImage: string;
  content: React.ReactNode;
  relatedPosts: RelatedPost[];
  onNavigate: (page: string) => void;
}

export function BlogPost({ title, bannerImage, content, relatedPosts, onNavigate }: BlogPostProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Button
        onClick={() => onNavigate('home')}
        variant="ghost"
        className="mb-6 text-gray-600 hover:text-blue-600"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Button>

      <div className="aspect-[21/9] overflow-hidden rounded-lg mb-8">
        <ImageWithFallback
          src={bannerImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="mb-6 text-gray-900">{title}</h1>

      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        {content}
      </div>

      {relatedPosts.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="mb-6 text-gray-900">Related Posts</h2>
          <div className="space-y-3">
            {relatedPosts.map((post) => (
              <button
                key={post.slug}
                onClick={() => onNavigate(post.slug)}
                className="block w-full text-left p-4 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors text-blue-600 hover:text-blue-700"
              >
                {post.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
