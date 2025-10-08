import { BlogCard } from './BlogCard';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const blogPosts = [
  {
    title: 'Skills to Learn in 2025',
    description: 'Discover the most valuable skills that will shape your future and help you stay competitive in the evolving digital landscape.',
    imageUrl: 'https://images.unsplash.com/photo-1759678444821-565ff103465c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2lsbHMlMjBsZWFybmluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NTk5MjAwNTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'skills-to-learn-2025',
  },
  {
    title: 'Emerging Digital Tools for Modern Professionals (2025 Edition)',
    description: 'Explore cutting-edge digital tools that are transforming how professionals work, collaborate, and achieve their goals.',
    imageUrl: 'https://images.unsplash.com/photo-1643501381409-bca32a0588bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdG9vbHMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1OTkyMDA1NXww&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'digital-tools-2025',
  },
  {
    title: 'Building a Sustainable Personal Brand Online',
    description: 'Learn how to create an authentic online presence that reflects your values and resonates with your audience.',
    imageUrl: 'https://images.unsplash.com/photo-1617893604862-2462582254c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMGJyYW5kJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1OTkyMDA1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'personal-brand-online',
  },
];

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-gray-900 mb-4">Latest Insights</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our curated articles on developing future-ready skills, discovering powerful digital tools,
          and building your online presence with purpose.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.slug}
            title={post.title}
            description={post.description}
            imageUrl={post.imageUrl}
            slug={post.slug}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </div>
  );
}
