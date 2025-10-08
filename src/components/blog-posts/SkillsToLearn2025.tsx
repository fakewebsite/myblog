import { BlogPost } from '../BlogPost';

interface SkillsToLearn2025Props {
  onNavigate: (page: string) => void;
}

export function SkillsToLearn2025({ onNavigate }: SkillsToLearn2025Props) {
  const relatedPosts = [
    { title: 'Emerging Digital Tools for Modern Professionals (2025 Edition)', slug: 'digital-tools-2025' },
    { title: 'Building a Sustainable Personal Brand Online', slug: 'personal-brand-online' },
  ];

  const content = (
    <>
      <p>
        As we navigate through 2025, the landscape of work and life continues to evolve at an unprecedented pace. 
        The skills that were valuable just a few years ago are being complemented—and sometimes replaced—by new 
        competencies that reflect our changing world. Whether you're looking to advance in your current career, 
        pivot to a new field, or simply stay relevant in an ever-changing marketplace, developing the right skills 
        is essential.
      </p>

      <h2 className="mt-8 mb-4 text-gray-900">1. Artificial Intelligence Literacy</h2>
      <p>
        Understanding AI is no longer optional—it's fundamental. AI literacy doesn't mean you need to become a 
        programmer or data scientist. Instead, it's about understanding how AI works, its capabilities and limitations, 
        and how to effectively collaborate with AI tools in your daily work. This includes knowing when to use AI, 
        how to craft effective prompts, and how to validate AI-generated content.
      </p>
      <p>
        Professionals who can bridge the gap between AI capabilities and practical business applications will find 
        themselves in high demand. From content creation to data analysis, AI tools are becoming integrated into 
        every aspect of work, and those who can leverage these tools effectively will have a significant advantage.
      </p>

      <h2 className="mt-8 mb-4 text-gray-900">2. Digital Communication Mastery</h2>
      <p>
        With remote and hybrid work becoming the norm, the ability to communicate clearly and persuasively through 
        digital channels is critical. This goes beyond simply writing emails—it encompasses video presentations, 
        asynchronous communication, digital storytelling, and the ability to build relationships without face-to-face 
        interaction.
      </p>
      <p>
        Mastering digital communication means understanding which medium works best for different messages, how to 
        structure information for maximum clarity, and how to maintain engagement in virtual environments. It also 
        involves emotional intelligence in digital spaces, recognizing that tone and intent can easily be misinterpreted 
        without visual and vocal cues.
      </p>

      <h2 className="mt-8 mb-4 text-gray-900">3. Data Interpretation and Analysis</h2>
      <p>
        We're swimming in data, but data without interpretation is just noise. The ability to analyze data, identify 
        meaningful patterns, and translate insights into actionable decisions is increasingly valuable across all 
        industries. You don't need to be a statistician, but understanding basic data analysis principles and being 
        comfortable with data visualization tools can set you apart.
      </p>
      <p>
        This skill extends to understanding metrics, KPIs, and how to measure success in your field. Whether you're 
        in marketing, operations, education, or any other sector, being data-literate helps you make evidence-based 
        decisions and demonstrate the value of your work.
      </p>

      <h2 className="mt-8 mb-4 text-gray-900">4. Adaptive Learning and Unlearning</h2>
      <p>
        Perhaps the most meta-skill of all is the ability to learn quickly and, equally importantly, to unlearn 
        outdated practices. The half-life of skills is shrinking, meaning that what you know today may become less 
        relevant tomorrow. Adaptive learning isn't just about acquiring new knowledge—it's about staying curious, 
        embracing uncertainty, and being comfortable with continuous evolution.
      </p>
      <p>
        This includes developing effective learning strategies, such as spaced repetition, active recall, and 
        project-based learning. It also means cultivating a growth mindset and viewing challenges as opportunities 
        rather than obstacles.
      </p>

      <h2 className="mt-8 mb-4 text-gray-900">5. Digital Content Creation</h2>
      <p>
        In our attention economy, the ability to create compelling digital content is a powerful skill. This doesn't 
        mean everyone needs to become a professional content creator, but understanding the basics of visual design, 
        video editing, and content strategy can enhance your professional presence and communication effectiveness.
      </p>
      <p>
        Whether you're creating presentations, social media posts, documentation, or educational materials, knowing 
        how to structure information visually, tell stories that resonate, and adapt content for different platforms 
        makes you a more effective communicator and collaborator.
      </p>

      <h2 className="mt-8 mb-4 text-gray-900">6. Systems Thinking</h2>
      <p>
        As our world becomes more interconnected, the ability to see the big picture and understand how different 
        components interact within a system is invaluable. Systems thinking helps you anticipate consequences, 
        identify leverage points for change, and solve complex problems that don't have obvious linear solutions.
      </p>
      <p>
        This skill is applicable everywhere—from understanding business ecosystems to addressing environmental 
        challenges to improving personal productivity. It's about seeing patterns, recognizing feedback loops, 
        and understanding that everything is connected.
      </p>

      <h2 className="mt-8 mb-4 text-gray-900">7. Cross-Cultural Competence</h2>
      <p>
        With global teams and international collaborations becoming standard, cross-cultural competence is essential. 
        This goes beyond awareness of different cultures—it's about effectively navigating cultural differences, 
        communicating across language barriers, and building inclusive environments.
      </p>
      <p>
        Understanding different work styles, communication preferences, and decision-making processes across cultures 
        can help you collaborate more effectively, avoid misunderstandings, and tap into diverse perspectives that 
        lead to better outcomes.
      </p>

      <h2 className="mt-8 mb-4 text-gray-900">Getting Started</h2>
      <p>
        The key to developing these skills isn't to try to master everything at once. Start by identifying which 
        skills align most closely with your goals and current context. Then, create a sustainable learning plan that 
        incorporates practice, reflection, and real-world application.
      </p>
      <p>
        Remember that skill development is a journey, not a destination. The most important thing is to stay curious, 
        remain open to new ideas, and commit to continuous growth. The future belongs to those who never stop learning 
        and adapting.
      </p>
    </>
  );

  return (
    <BlogPost
      title="Skills to Learn in 2025"
      bannerImage="https://images.unsplash.com/photo-1759678444821-565ff103465c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2lsbHMlMjBsZWFybmluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NTk5MjAwNTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
      content={content}
      relatedPosts={relatedPosts}
      onNavigate={onNavigate}
    />
  );
}
