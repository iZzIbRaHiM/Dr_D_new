import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogHero, blogPosts } from "@/content/blog-data";

import blogForexTerms from "@/assets/blog-forex-terms.jpg";
import blogBeginnersGuide from "@/assets/blog-beginners-guide.jpg";
import blogPsychology from "@/assets/blog-psychology.jpg";
import blogRiskManagement from "@/assets/blog-risk-management.jpg";
import blogSentiment from "@/assets/blog-sentiment.jpg";
import blogRoutine from "@/assets/blog-routine.jpg";

const blogImages: Record<string, string> = {
  "forex-terms-every-beginner-must-know": blogForexTerms,
  "forex-trading-for-beginners-guide": blogBeginnersGuide,
  "trading-psychology-mastering-your-mind": blogPsychology,
  "risk-management-golden-rules": blogRiskManagement,
  "understanding-market-sentiment": blogSentiment,
  "building-trading-routine": blogRoutine,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const activePost = blogPosts.find((p) => p.slug === selectedPost);

  if (activePost) {
    return (
      <main className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />
        <section className="relative pt-32 pb-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--midnight-light))_0%,hsl(var(--background))_70%)]" />
          <div className="container mx-auto px-6 relative z-10 max-w-3xl">
            <button
              type="button"
              onClick={() => setSelectedPost(null)}
              aria-label="Back to blog list"
              className="flex items-center gap-2 min-h-[44px] text-primary font-sans text-sm mb-8 hover:underline"
            >
              <ArrowLeft size={16} /> Back to Blog
            </button>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="px-3 py-1 text-xs font-sans font-semibold tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/30">
                {activePost.category}
              </span>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
                {activePost.title}
              </h1>
              <div className="flex items-center gap-4 mt-4 text-muted-foreground font-sans text-sm">
                <span className="flex items-center gap-1.5"><Calendar size={14} /> {activePost.date}</span>
                <span className="flex items-center gap-1.5"><Clock size={14} /> {activePost.readTime}</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="rounded-2xl overflow-hidden mb-10 gold-border-glow">
              <img src={blogImages[activePost.slug]} alt={activePost.title} className="w-full h-64 md:h-80 object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {activePost.content.map((para, i) => (
                <p key={i} className="text-muted-foreground font-sans leading-relaxed text-base">
                  {para}
                </p>
              ))}
            </motion.div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--midnight-light))_0%,hsl(var(--background))_70%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-sans text-sm tracking-widest uppercase mb-4">
            {blogHero.subtitle}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
            {blogHero.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            {blogHero.description}
          </motion.p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            onClick={() => setSelectedPost(blogPosts[0].slug)}
            className="glass-dark rounded-2xl overflow-hidden gold-border-glow cursor-pointer group"
          >
            <div className="grid lg:grid-cols-2">
              <div className="h-64 lg:h-auto overflow-hidden">
                <img src={blogImages[blogPosts[0].slug]} alt={blogPosts[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
                <span className="px-3 py-1 text-xs font-sans font-semibold tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/30 self-start">
                  Featured — {blogPosts[0].category}
                </span>
                <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mt-4 mb-4 group-hover:text-primary transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground font-sans leading-relaxed mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-muted-foreground font-sans text-sm">
                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {blogPosts[0].date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} /> {blogPosts[0].readTime}</span>
                  </div>
                  <span className="flex items-center gap-1 text-primary font-sans text-sm font-medium group-hover:gap-2 transition-all">
                    Read More <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, i) => (
              <motion.div
                key={post.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                onClick={() => setSelectedPost(post.slug)}
                className="glass-dark rounded-xl overflow-hidden gold-border-glow cursor-pointer group flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img src={blogImages[post.slug]} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="px-2.5 py-1 text-xs font-sans font-semibold tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/30 self-start">
                    {post.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-foreground mt-3 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-muted-foreground font-sans text-xs flex items-center gap-1.5">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="text-primary font-sans text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
