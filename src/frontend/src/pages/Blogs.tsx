import {
  ArrowRight,
  BookOpen,
  Calendar,
  ExternalLink,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Psychological First Aid in Crises",
    date: "March 10, 2026",
    author: "Danish Niaz Babbar",
    category: "Training & Workshops",
    excerpt:
      "Indus Hospital & Health Network (IHHN) SAM Civil Hospital Campus, Badin, successfully conducted a workshop on 'Psychological First Aid in Crises'. The session equipped healthcare professionals with practical PFA skills including Safety, Calmness, Connectedness, Self-efficacy, and Hope.",
    content: `Indus Hospital & Health Network (IHHN) SAM Civil Hospital Campus, Badin, successfully conducted a workshop on "Psychological First Aid in Crises" at the Seminar Hall. The session brought together healthcare professionals and community workers to enhance their skills in supporting individuals during emergencies and traumatic situations.

The workshop focused on equipping participants with practical knowledge and skills to provide effective Psychological First Aid (PFA). Participants learned to:

• Define crisis and trauma, recognize their psychological and physical impacts
• Identify the key principles of PFA: Safety, Calmness, Connectedness, Self-efficacy, and Hope
• Practice practical PFA techniques in simulated crisis situations
• Apply effective listening, empathy, and grounding strategies with distressed individuals
• Understand when and how to refer individuals for professional mental health support
• Practice self-care and stress management to maintain emotional wellbeing while providing PFA

By the end of the workshop, participants gained confidence and practical skills to apply the 5Cs of Psychological First Aid in real-life crises, demonstrate empathy and calm communication, and practice self-care while supporting others.

The workshop was facilitated by Ms. Ayesha Kasiri, Assistant Manager, Pur Umeed Zindagi Program, Community Health Directorate, IHHN, with moderation by Mr. Danish Khan, Psychologist, Community Health Directorate, IHHN.`,
    url: "https://danishniazbabbar.blogspot.com/2026/03/psychological-first-aid-in-crises.html",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisBlp3NLSqHrtsqTB1NbtKRVwgWKVvRYP4DiBMA9ejB6fOmPwcI85Jxff4_sOVXGn0jgtJj-d5mXOMYAc9KplZhlO6sTwkzV27C5gH6NUGvTembADFe15YKnodnsMF5-6LvADndPmCH0lBEdZyYX_wJ9sPDZ36elTOQf902T2GC44dw9NV635Qmci8EZqT/w801-h431/psycological-first-aid-e1767090987590.jpeg",
  },
  {
    id: 2,
    title:
      "Understanding Psychological Issues: Causes, Types, and Effective Management",
    date: "December 8, 2024",
    author: "Danish Niaz Babbar",
    category: "Mental Health Education",
    excerpt:
      "Psychological issues affect millions of people worldwide, impacting mental health, emotional stability, and quality of life. This article explores the underlying causes, various types of psychological disorders, and effective management strategies.",
    content: `Psychological issues affect millions of people worldwide, impacting mental health, emotional stability, and quality of life. Understanding these issues is crucial for early intervention, reducing stigma, and promoting mental well-being.

Types of Psychological Issues:

1. Mood Disorders (Depression, Bipolar Disorder) — Persistent sadness, mood swings, loss of interest, fatigue.

2. Anxiety Disorders (GAD, Panic Disorder) — Excessive worry, panic attacks, restlessness, sleep disturbances.

3. Personality Disorders — Unstable self-image, impulsive behavior, difficulty forming relationships.

4. Psychotic Disorders (Schizophrenia) — Hallucinations, delusions, disorganized thinking.

5. Eating Disorders — Unhealthy eating habits, distorted body image, extreme concern with weight.

6. Trauma-Related Disorders (PTSD) — Flashbacks, nightmares, hyper-vigilance, emotional numbness.

Causes: Biological factors (genetics, chemical imbalances), Environmental factors (childhood trauma, chronic stress), Psychological factors (low self-esteem, negative thought patterns), Social factors (isolation, stigma).

Effective Management:
• Cognitive Behavioral Therapy (CBT) and other therapies
• Medication when prescribed by a professional
• Lifestyle changes: exercise, healthy diet, adequate sleep
• Mindfulness and relaxation techniques
• Support groups

Promoting open conversations about mental health and educating the public are key to reducing stigma. Early intervention and supportive environments are essential for recovery.`,
    url: "https://danishniazbabbar.blogspot.com/2024/12/understanding-psychological-issues.html",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3rdJ8sH5gmXXOhyvcZix1oThLX2N4qWSud9x434l_0NIqqeIae0v2oL8JRwZ9gFpBYZb_zdORQkHdOmG1G8hXI_a5CepFoWdgRD0V8wHAMT1zs8GdHI5N8NVSQw9msAy8ybo_T1ExP4eHNE0DU4x_ksP-Q-jDRy7a5bLJb2OIQaxcPpcKsUD0X4NcEq1P/s320/1000059619.webp",
  },
  {
    id: 3,
    title: "Stress Makes You Sick: Understanding the Impact on Health",
    date: "December 6, 2024",
    author: "Danish Niaz Babbar",
    category: "Stress & Wellbeing",
    excerpt:
      "We all experience stress at different points in our lives. A little stress can motivate us, but when it becomes constant, it takes a toll on our body and mind. Learn how stress affects your health and simple ways to manage it.",
    content: `We all experience stress at different points in our lives. Whether it's work pressure, financial struggles, or relationship issues, stress seems to creep into every corner of life. A little stress can motivate us to achieve goals, but when it becomes constant, it takes a toll on our body and mind.

How Stress Affects Our Body:

1. Weakened Immune System — Prolonged stress lowers your body's ability to fight off infections, making you prone to colds, flu, and other illnesses.

2. Heart Problems — Chronic stress can lead to high blood pressure and heart diseases.

3. Digestive Issues — Stress can cause acidity, stomach pain, and irritable bowel syndrome (IBS).

4. Mental Health Struggles — Constant stress leads to anxiety, depression, and inability to focus.

Simple Ways to Manage Stress:
• Take Deep Breaths: A few deep breaths can calm your mind.
• Exercise Regularly: Moving your body releases feel-good hormones.
• Talk to Loved Ones: Sharing your worries lightens the burden.
• Sleep Well: Good sleep helps your body recover.
• Seek Professional Help: Therapists can teach you coping strategies.

Stress is a part of life, but it doesn't have to control your health. By understanding its effects and learning how to manage it, you can lead a healthier and happier life.`,
    url: "https://danishniazbabbar.blogspot.com/2024/12/stress-makes-you-sick-understanding.html",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSvKpQtIZ9A7ZouhjcXTE9nXZC8OF4CaImxIsF5z6jTEMBscrL_Nh0UE4grX1U8WbSk3UaakLb62gg2CTyPF7tM-NnK3YOugd-QbimegqPu9meMF9sq_8GeinNke1Ipi9UQTYFJqR_14J6BrS5KI2ozWTmVbMhz41vJrMwMGEK6PMn_WUrMVzRaW68d4f7/s320/1000059236.webp",
  },
  {
    id: 4,
    title: "The Psychological Impact of Home and Family Environment",
    date: "December 5, 2024",
    author: "Danish Niaz Babbar",
    category: "Family & Mental Health",
    excerpt:
      "The environment at home and within the family plays a significant role in shaping an individual's personality, behavior, and mental health. This article explores how positive or negative home environments can impact individuals psychologically.",
    content: `The environment at home and within the family plays a significant role in shaping an individual's personality, behavior, and mental health. Children and other family members learn and adapt based on their surroundings, and the quality of the family atmosphere directly influences their emotional and psychological well-being.

Psychological Effects of the Home Environment:

1. Emotional Stability or Instability — A peaceful and harmonious home environment fosters emotional stability in children and family members. Frequent conflicts and negative communication can lead to depression and anxiety.

2. Development of Self-Esteem — A supportive and encouraging family environment helps build self-esteem and confidence. Toxic environments erode confidence and increase vulnerability to mental health issues.

3. Communication Patterns — Open, respectful communication in the family promotes emotional intelligence and conflict resolution skills.

4. Impact on Children — Children raised in nurturing environments tend to develop better social skills, academic performance, and emotional regulation.

Creating a Positive Home Environment:
• Practice open, respectful communication
• Show appreciation and encourage family members
• Establish healthy routines and boundaries
• Spend quality time together
• Address conflicts constructively without aggression
• Seek family therapy or counseling when needed

A positive home environment is one of the most powerful protective factors for mental health across the lifespan.`,
    url: "https://danishniazbabbar.blogspot.com/2024/12/the-psychological-impact-of-home-and.html",
    image: null,
  },
  {
    id: 5,
    title: "Understanding Psychotic Disorders: Symptoms, Causes, and Treatment",
    date: "December 4, 2024",
    author: "Danish Niaz Babbar",
    category: "Mental Health Education",
    excerpt:
      "Psychotic disorders are severe mental health conditions that significantly impair an individual's ability to perceive and interact with reality. This article provides a comprehensive overview including symptoms, causes, types, and treatment strategies.",
    content: `Psychotic disorders represent a spectrum of mental health conditions characterized by a disconnection from reality, often resulting in hallucinations, delusions, and disorganized thinking. These disorders can affect daily functioning, relationships, and overall quality of life.

Symptoms of Psychotic Disorders:
• Hallucinations: Seeing, hearing, or feeling things that don't exist
• Delusions: Strongly held false beliefs not based in reality
• Disorganized thinking and speech
• Disorganized or abnormal motor behavior
• Negative symptoms: reduced emotional expression, lack of motivation

Types of Psychotic Disorders:
• Schizophrenia — The most well-known psychotic disorder
• Schizoaffective Disorder — Combination of psychosis and mood disorder symptoms
• Delusional Disorder — Persistent delusions without other psychotic symptoms
• Brief Psychotic Disorder — Short-term episode triggered by stress

Causes:
• Genetic predisposition
• Brain chemistry imbalances (dopamine, serotonin)
• Environmental stressors and trauma
• Substance abuse
• Developmental factors

Treatment Approaches:
• Antipsychotic medications
• Cognitive Behavioral Therapy (CBT)
• Family therapy and psychoeducation
• Rehabilitation and social support programs
• Early intervention is critical for better outcomes

Early intervention and consistent care can dramatically improve outcomes for individuals suffering from psychosis.`,
    url: "https://danishniazbabbar.blogspot.com/2024/12/understanding-psychotic-disorders.html",
    image: null,
  },
  {
    id: 6,
    title:
      "The Complex World of OCD: Myths, Realities, and Treatment Strategies",
    date: "December 2, 2024",
    author: "Danish Niaz Babbar",
    category: "Mental Health Education",
    excerpt:
      "Obsessive-Compulsive Disorder (OCD) is a chronic and debilitating mental health condition characterized by intrusive thoughts and repetitive behaviors. Despite being widely recognized, OCD is often misunderstood and stigmatized.",
    content: `Obsessive-Compulsive Disorder is not merely about being overly tidy or perfectionistic, as popular misconceptions suggest. It is a serious mental health condition that can disrupt a person's life, relationships, and well-being. OCD affects approximately 1-2% of the global population.

What is OCD?
• Obsessions: Persistent, unwanted thoughts, images, or urges that cause significant distress.
• Compulsions: Repetitive behaviors or mental acts performed to reduce anxiety caused by obsessions.

Common Myths vs. Reality:
• Myth: OCD is just about cleanliness. Reality: OCD can involve fears about harm, symmetry, religion, relationships, and more.
• Myth: People with OCD can simply stop their behaviors. Reality: OCD is a neurobiological condition requiring professional treatment.
• Myth: OCD is rare. Reality: It affects millions worldwide across all cultures and backgrounds.

Treatment Strategies:
• Cognitive Behavioral Therapy — specifically Exposure and Response Prevention (ERP), the gold standard treatment
• Medication: Selective Serotonin Reuptake Inhibitors (SSRIs)
• Mindfulness-based approaches
• Support groups
• Psychoeducation for patients and families

With proper treatment, most people with OCD can lead fulfilling lives. Early diagnosis and access to evidence-based treatment are key to recovery.`,
    url: "https://danishniazbabbar.blogspot.com/2024/12/the-complex-world-of-ocd-myths.html",
    image: null,
  },
  {
    id: 7,
    title:
      "The Psychology of Hyper-Connected but Emotionally Disconnected World",
    date: "November 27, 2024",
    author: "Danish Niaz Babbar",
    category: "Digital Age & Mental Health",
    excerpt:
      "In the 21st century, the digital revolution has connected us in ways previously unimaginable, yet feelings of loneliness, isolation, and emotional disconnection are at an all-time high. This article explores why emotional bonds are weakening despite technological means to stay connected.",
    content: `In the 21st century, the digital revolution has connected us in ways previously unimaginable. From instant messaging and video calls to social media platforms that bring millions together, the world is hyper-connected. Yet, paradoxically, feelings of loneliness, isolation, and emotional disconnection are at an all-time high.

The Rise of Digital Communication:
Hyper-connectivity is rooted in the explosive growth of technology. Smartphones, social media platforms, and messaging apps have allowed people to interact across distances with ease. However, digital interactions often lack the depth and authenticity of face-to-face communication, leading to a shallow sense of bonding.

Why Emotional Disconnection Occurs:
• Social media creates curated, idealized versions of life that foster comparison and inadequacy
• Constant digital stimulation reduces our capacity for deep, meaningful conversation
• Screen time replaces activities that build genuine emotional bonds
• Notifications and multitasking fragment our attention, preventing real presence

Impact on Mental Health:
• Increased rates of loneliness and depression despite large online networks
• Reduced empathy from lack of face-to-face interaction
• Digital addiction and fear of missing out (FOMO)
• Difficulty forming and maintaining deep relationships

Building Genuine Connection:
• Prioritize face-to-face interactions
• Practice mindful technology use — set boundaries
• Engage in community activities and shared interests
• Be fully present in conversations — put the phone away
• Seek professional support if loneliness becomes chronic`,
    url: "https://danishniazbabbar.blogspot.com/2024/11/the-psychology-of-hyper-connected-but.html",
    image: null,
  },
  {
    id: 8,
    title:
      "Digital Detox or Addiction? The Rising Mental Health Issues from Internet and Tech Dependence",
    date: "September 20, 2024",
    author: "Danish Niaz Babbar",
    category: "Digital Age & Mental Health",
    excerpt:
      "The digital age has transformed how people interact, work, and entertain themselves. However, increasing reliance on digital devices has given rise to a new type of addiction causing severe psychological issues. Learn about tech dependence and the importance of digital detox.",
    content: `The digital age has transformed the way people interact, work, and entertain themselves. The internet, social media, gaming platforms, and smartphones are now deeply intertwined with daily life. However, this increasing reliance on digital devices has given rise to a new type of addiction — one that is insidious and deeply rooted in modern society.

Signs of Internet and Tech Addiction:
• Inability to control time spent on devices
• Neglecting real-world responsibilities for digital activities
• Withdrawal symptoms when unable to access devices
• Using technology to escape negative emotions
• Disrupted sleep due to screen time

Mental Health Impacts:
• Anxiety and depression linked to social media use
• Reduced attention span and concentration
• Sleep disorders from blue light exposure
• Social isolation and weakened real-world relationships
• Cyberbullying and online harassment effects

Benefits of Digital Detox:
• Improved sleep quality
• Reduced anxiety and stress
• Better face-to-face social connections
• Enhanced focus and productivity
• Greater mindfulness and presence

How to Start a Digital Detox:
• Set specific no-phone times (meals, bedtime)
• Disable non-essential notifications
• Replace screen time with physical activities
• Practice mindfulness without devices
• Gradually reduce daily screen time

Technology is a tool — the key is conscious, balanced use that serves your wellbeing rather than undermining it.`,
    url: "https://danishniazbabbar.blogspot.com/2024/09/digital-detox-or-addiction-rising.html",
    image: null,
  },
];

const categories = [
  "All",
  "Mental Health Education",
  "Stress & Wellbeing",
  "Training & Workshops",
  "Family & Mental Health",
  "Digital Age & Mental Health",
];

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBlog, setSelectedBlog] = useState<(typeof blogs)[0] | null>(
    null,
  );

  const filtered =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === selectedCategory);

  return (
    <div className="min-h-screen" style={{ background: "oklch(97% 0.01 145)" }}>
      {/* Hero */}
      <div
        className="py-14 px-4 text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(25% 0.15 145), oklch(35% 0.2 145))",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3">
            <BookOpen className="w-6 h-6 text-white/80" />
            <span className="text-sm font-semibold text-white/70 uppercase tracking-widest">
              Blogs & Articles
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Mental Health Insights
          </h1>
          <p className="text-white/80 text-base leading-relaxed">
            Articles and insights by{" "}
            <span className="font-semibold text-white">Danish Niaz Babbar</span>
            , Psychologist & Regional Lead (Sindh), Pur Umeed Zindagi
          </p>
          <a
            href="https://danishniazbabbar.blogspot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full text-sm font-semibold bg-white/15 text-white border border-white/30 hover:bg-white/25 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Visit Full Blog
          </a>
        </div>
      </div>
      {/* Category Filter */}
      <div
        className="sticky top-16 z-30 bg-white border-b"
        style={{ borderColor: "oklch(88% 0.03 145)" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
              style={{
                background:
                  selectedCategory === cat
                    ? "oklch(35% 0.2 145)"
                    : "oklch(93% 0.02 145)",
                color:
                  selectedCategory === cat ? "white" : "oklch(35% 0.08 145)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden border flex flex-col group cursor-pointer hover:shadow-lg transition-shadow"
              style={{ borderColor: "oklch(90% 0.02 145)" }}
              onClick={() => setSelectedBlog(blog)}
              onKeyDown={(e) => {
                if (e.key === "Enter") setSelectedBlog(blog);
              }}
            >
              {/* Image */}
              {blog.image ? (
                <div className="h-44 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display =
                        "none";
                    }}
                  />
                </div>
              ) : (
                <div
                  className="h-44 flex items-center justify-center"
                  style={{ background: "oklch(92% 0.04 145)" }}
                >
                  <BookOpen
                    className="w-12 h-12"
                    style={{ color: "oklch(50% 0.15 145)" }}
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <span
                  className="text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "oklch(40% 0.2 145)" }}
                >
                  {blog.category}
                </span>
                <h2
                  className="text-base font-bold mb-2 leading-snug"
                  style={{ color: "oklch(20% 0.08 145)" }}
                >
                  {blog.title}
                </h2>
                <p
                  className="text-sm leading-relaxed flex-1 mb-4"
                  style={{ color: "oklch(45% 0.04 145)" }}
                >
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex items-center gap-1 text-xs"
                      style={{ color: "oklch(55% 0.04 145)" }}
                    >
                      <Calendar className="w-3 h-3" />
                      {blog.date}
                    </span>
                  </div>
                  <span
                    className="flex items-center gap-1 text-xs font-semibold"
                    style={{ color: "oklch(35% 0.2 145)" }}
                  >
                    Read More <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="mt-12 p-6 rounded-2xl text-center"
          style={{ background: "oklch(93% 0.04 145)" }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <User className="w-5 h-5" style={{ color: "oklch(35% 0.2 145)" }} />
            <span
              className="font-semibold"
              style={{ color: "oklch(25% 0.1 145)" }}
            >
              About the Author
            </span>
          </div>
          <p className="text-sm mb-3" style={{ color: "oklch(40% 0.06 145)" }}>
            <strong>Danish Niaz Babbar</strong> — Psychologist & Regional Lead
            for Sindh, Pur Umeed Zindagi Program, IHHN. BS Psychology from
            University of Sindh, Jamshoro. Specialization in Addiction Science
            from Institute of Clinical Psychology.
          </p>
          <a
            href="https://danishniazbabbar.blogspot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "oklch(35% 0.2 145)" }}
          >
            <ExternalLink className="w-4 h-4" />
            More Articles at danishniazbabbar.blogspot.com
          </a>
        </div>
      </div>
      selectedBlog && (
      <div
        className="fixed inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto"
        style={{ background: "rgba(0,0,0,0.6)" }}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelectedBlog(null);
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape") setSelectedBlog(null);
        }}
        aria-modal="true"
        aria-label="Blog detail"
      >
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-8"
          style={{ maxHeight: "90vh", overflowY: "auto" }}
        >
          {/* Modal Header */}
          <div
            className="sticky top-0 bg-white px-6 pt-5 pb-4 border-b flex items-start justify-between gap-4"
            style={{ borderColor: "oklch(90% 0.02 145)" }}
          >
            <div className="flex-1">
              <span
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: "oklch(40% 0.2 145)" }}
              >
                {selectedBlog!.category}
              </span>
              <h2
                className="text-lg font-bold mt-1 leading-snug"
                style={{ color: "oklch(20% 0.08 145)" }}
              >
                {selectedBlog!.title}
              </h2>
              <div className="flex items-center gap-4 mt-2">
                <span
                  className="flex items-center gap-1 text-xs"
                  style={{ color: "oklch(55% 0.04 145)" }}
                >
                  <Calendar className="w-3 h-3" />
                  {selectedBlog!.date}
                </span>
                <span
                  className="flex items-center gap-1 text-xs"
                  style={{ color: "oklch(55% 0.04 145)" }}
                >
                  <User className="w-3 h-3" />
                  {selectedBlog!.author}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setSelectedBlog(null)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
              aria-label="Close"
            >
              <X className="w-5 h-5" style={{ color: "oklch(40% 0.04 145)" }} />
            </button>
          </div>

          {/* Modal Image */}
          {selectedBlog!.image && (
            <img
              src={selectedBlog!.image}
              alt={selectedBlog!.title}
              className="w-full object-cover max-h-56"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          )}

          {/* Modal Body */}
          <div className="px-6 py-5">
            <div
              className="text-sm leading-relaxed whitespace-pre-line"
              style={{ color: "oklch(30% 0.05 145)" }}
            >
              {selectedBlog!.content}
            </div>

            <div
              className="mt-6 pt-4 border-t flex items-center justify-between"
              style={{ borderColor: "oklch(92% 0.02 145)" }}
            >
              <p className="text-xs" style={{ color: "oklch(55% 0.04 145)" }}>
                Source: danishniazbabbar.blogspot.com
              </p>
              <a
                href={selectedBlog!.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: "oklch(35% 0.2 145)" }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Read on Blog
              </a>
            </div>
          </div>
        </div>
      </div>
      )
    </div>
  );
}
