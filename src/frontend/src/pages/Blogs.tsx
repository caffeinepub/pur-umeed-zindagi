import {
  ArrowRight,
  BookOpen,
  Calendar,
  ExternalLink,
  MapPin,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

type Blog = {
  id: number;
  title: string;
  date: string;
  author: string;
  category: string;
  categories: string[];
  ruralTag?: boolean;
  excerpt: string;
  content: string;
  url: string;
  image: string | null;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "Stress in Rural Pakistan: The Hidden Burden",
    date: "March 2026",
    author: "Pur Umeed Zindagi, IHHN",
    category: "Rural Mental Health",
    categories: ["Rural Mental Health", "Stress"],
    ruralTag: true,
    excerpt:
      "Rural communities in Pakistan face unique stressors -- poverty, limited healthcare, natural disasters, and social isolation. This article explores the burden of stress in dihati areas.",
    content: `Rural communities in Pakistan bear a disproportionate burden of psychological stress. Unlike urban populations, residents of dihati (rural) areas face a unique and compounding set of stressors that are rarely addressed by formal healthcare systems.

Farming Stress and Financial Burden

For millions of farmers across Sindh, Punjab, and Balochistan, daily survival is a source of chronic stress. Unpredictable rains, water scarcity, crop failure, and rising input costs create persistent financial anxiety. Many farmers are trapped in debt cycles -- borrowing from landlords or banks to plant crops, only to face losses due to floods, drought, or market fluctuations.

Limited Access to Mental Health Services

Rural areas in Pakistan have virtually no formal mental health infrastructure. A single psychiatrist may serve a district of hundreds of thousands. Community health workers like MHOs (Mental Health Officers) under the Pur Umeed Zindagi program are often the only point of contact for mental health support in these communities.

Stigma: The Invisible Barrier

In rural Pakistan, mental health conditions are frequently attributed to supernatural causes, personal weakness, or moral failure. This deep-rooted stigma prevents individuals from seeking help even when services are available. Community-level awareness sessions are critical to changing this narrative.

Natural Disasters and Displacement

The 2022 super-floods devastated rural Sindh and Balochistan, displacing millions. Displacement, loss of livelihood, home, and loved ones created acute and chronic stress that has lasted years. Post-disaster mental health responses remain largely insufficient.

Community-Based Solutions

The Pur Umeed Zindagi (PUZ) program under IHHN has adopted a community-based approach to reach rural patients:

• Mobile Mental Health Bus (MMB) serving remote Sindh areas
• MHOs stationed at Primary Care Plus (PCP) sites in Matli, Sehwan, Makli, Khorwah, and Shadilarge
• Psychosocial support groups in flood-affected communities
• Awareness sessions at Civil Hospital Badin (CHB)

Addressing stress in rural Pakistan requires not just clinical services but systemic attention to poverty, infrastructure, and the dignity of rural life.

Reference: WHO Mental Health Atlas 2023; IHHN Pur Umeed Zindagi Program Reports 2024–2026`,
    url: "https://www.who.int/mental_health",
    image: null,
  },
  {
    id: 2,
    title: "Anxiety Among Farmers and Rural Workers",
    date: "February 2026",
    author: "Pur Umeed Zindagi, IHHN",
    category: "Rural Mental Health",
    categories: ["Rural Mental Health", "Anxiety"],
    ruralTag: true,
    excerpt:
      "Crop failure, debt, water scarcity -- farmers in Sindh, Balochistan, and Punjab face chronic anxiety that goes undiagnosed. What does anxiety look like in rural communities?",
    content: `Anxiety disorders affect approximately 284 million people worldwide, yet in rural Pakistan, the condition is rarely recognized, diagnosed, or treated. For farmers and rural workers, anxiety is not an abstract concept -- it is a daily reality woven into the fabric of survival.

What Anxiety Looks Like in Rural Settings

Anxiety in rural communities often presents differently than in clinical settings. It may appear as:

• Persistent worry about weather, crop yields, and water availability
• Physical symptoms: heart palpitations, chest tightness, headaches, trembling
• Irritability and anger in family settings (misattributed to character, not illness)
• Avoidance of social gatherings due to shame around financial failure
• Sleep disturbances and nightmares
• Inability to make decisions due to fear of consequences

Key Triggers for Rural Anxiety

The triggers in rural Pakistan are distinct from urban anxiety:

1. Crop Failure — A single failed harvest can wipe out a family's income for an entire year
2. Debt — Most small farmers operate on borrowed money; default is catastrophic
3. Climate Change — Unpredictable monsoons, heatwaves, and drought create constant uncertainty
4. Water Scarcity — In Balochistan and rural Sindh, water access itself is a source of acute anxiety
5. Land Disputes — Property conflicts are a major source of prolonged community anxiety
6. Child Marriage and Family Pressure — Women and young girls face particular anxiety from family expectations

Cultural Barriers to Help-Seeking

In rural communities, admitting anxiety is often seen as weakness. Many individuals self-medicate with tobacco, paan, or in some cases, substance use. Spiritual and traditional healers (hakims, fakirs) are the first point of contact for most rural patients.

The Role of PUZ's MHOs

Mental Health Officers (MHOs) stationed at PCP sites across Sindh, Punjab, and Balochistan are trained in Cognitive Behavioral Techniques and basic anxiety management. They conduct:

• PHQ-4 and GAD-7 screening in community settings
• Psychoeducation about anxiety as a medical condition
• Breathing exercises and grounding techniques
• Referral to regional psychologists for moderate-to-severe cases

Anxiety is treatable. Community-based mental health services, culturally sensitive outreach, and reduced stigma can transform outcomes for millions of rural Pakistanis.

Reference: WHO Fact Sheet on Anxiety Disorders; PUZ Program Field Data 2024–2026`,
    url: "https://www.who.int/news-room/fact-sheets/detail/anxiety-disorders",
    image: null,
  },
  {
    id: 3,
    title: "Depression: When Sadness Becomes a Sickness",
    date: "January 2026",
    author: "Pur Umeed Zindagi, IHHN",
    category: "Depression",
    categories: ["Depression"],
    ruralTag: false,
    excerpt:
      "Millions suffer from depression in silence. Learn the difference between ordinary sadness and clinical depression, its warning signs, and how treatment can help.",
    content: `Depression is one of the most common and debilitating mental health conditions worldwide. According to the WHO, over 280 million people live with depression globally. Yet it remains one of the most stigmatized and least treated conditions -- particularly in low- and middle-income countries like Pakistan.

What Is Depression?

Depression is not simply feeling sad. It is a clinical condition characterized by persistent low mood, loss of interest, and a range of physical and psychological symptoms lasting two weeks or more. Unlike ordinary grief or sadness -- which are normal responses to life events -- depression persists regardless of circumstances and significantly impairs daily functioning.

Key Warning Signs

According to DSM-5 criteria, depression involves five or more of the following over a two-week period:

• Persistent sad, empty, or hopeless mood
• Loss of interest or pleasure in most activities (anhedonia)
• Significant weight loss or gain
• Insomnia or hypersomnia (sleeping too much)
• Fatigue or loss of energy
• Feelings of worthlessness or excessive guilt
• Difficulty thinking, concentrating, or making decisions
• Recurrent thoughts of death or suicide

Types of Depression

• Major Depressive Disorder (MDD): The most severe form
• Persistent Depressive Disorder (Dysthymia): Chronic, lower-grade depression lasting 2+ years
• Postpartum Depression: Following childbirth; particularly prevalent in Pakistan
• Seasonal Affective Disorder: Related to seasonal light changes
• Treatment-Resistant Depression: Not responding to standard treatments

Depression in Pakistan

Studies estimate 34–44% of patients visiting primary care clinics in Pakistan have depressive symptoms. In rural areas, depression is often expressed through somatic complaints (body pain, fatigue) rather than emotional language, making it harder to diagnose.

The PHQ-4 and PHQ-9 screening tools used by PUZ's MHOs help identify depression in community settings, even among patients who do not report emotional symptoms.

Treatment Options

• Psychotherapy: Cognitive Behavioral Therapy (CBT), Interpersonal Therapy
• Medication: Antidepressants prescribed by a psychiatrist
• Community support: Social engagement, peer support groups
• Lifestyle: Exercise, sleep hygiene, reduced isolation

Depression is highly treatable. Seeking help is a sign of strength, not weakness.

Reference: WHO Depression Fact Sheet 2023; DSM-5 Diagnostic Criteria; PUZ Program Clinical Data`,
    url: "https://www.who.int/news-room/fact-sheets/detail/depression",
    image: null,
  },
  {
    id: 4,
    title: "Understanding Anxiety: More Than Just Worry",
    date: "January 2026",
    author: "Pur Umeed Zindagi, IHHN",
    category: "Anxiety",
    categories: ["Anxiety"],
    ruralTag: false,
    excerpt:
      "Anxiety is the world's most common mental health condition. This article explains what anxiety really is, the different types, and practical ways to manage it.",
    content: `Anxiety is the world's most prevalent mental health condition, affecting over 284 million people according to the World Health Organization. Yet it is also among the most misunderstood -- often dismissed as "just worrying" or attributed to personal weakness.

What Is Anxiety?

Anxiety is a normal human emotion -- a response to perceived threats or uncertainty. However, when anxiety becomes excessive, persistent, and disproportionate to the actual situation, it crosses into a clinical disorder that requires attention and care.

Types of Anxiety Disorders

1. Generalized Anxiety Disorder (GAD)
Characterized by excessive, uncontrollable worry about everyday matters -- health, work, finances, relationships. The worry is difficult to stop and interferes with daily life.

2. Panic Disorder
Recurring, unexpected panic attacks -- sudden episodes of intense fear with physical symptoms: racing heart, shortness of breath, dizziness, numbness, fear of dying.

3. Social Anxiety Disorder
Intense fear of social situations due to fear of judgment, embarrassment, or humiliation. Can severely limit work, relationships, and daily activities.

4. Specific Phobias
Irrational fear of specific objects or situations -- heights, animals, medical procedures, flying.

5. Health Anxiety
Excessive worry about having or developing a serious illness, despite reassurance.

Physical Symptoms of Anxiety

• Rapid heartbeat and chest tightness
• Shortness of breath or hyperventilation
• Muscle tension, trembling, or shaking
• Sweating, nausea, stomach discomfort
• Headaches and dizziness
• Fatigue and sleep disturbances

Practical Management Techniques

4-7-8 Breathing: Inhale for 4 counts, hold for 7, exhale slowly for 8. Activates the parasympathetic nervous system.

Grounding (5-4-3-2-1): Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste. Breaks the anxiety cycle.

Cognitive Restructuring (CBT): Identify and challenge catastrophic thinking patterns. Ask: "What is the evidence for this fear? What is the realistic worst case?"

Regular Exercise: 30 minutes of moderate activity significantly reduces anxiety symptoms.

Limiting Stimulants: Reduce caffeine, tobacco, and screen time before bed.

When to Seek Help

If anxiety is interfering with work, relationships, or daily activities for more than 2 weeks, consult a mental health professional. MHOs at PUZ program sites offer free assessment and support.

Reference: WHO Anxiety Disorders Fact Sheet; CBT clinical guidelines; PUZ Program Community Health Data`,
    url: "https://www.who.int/news-room/fact-sheets/detail/anxiety-disorders",
    image: null,
  },
  {
    id: 5,
    title: "Stress Management for Rural Communities",
    date: "December 2025",
    author: "Pur Umeed Zindagi, IHHN",
    category: "Stress",
    categories: ["Stress", "Rural Mental Health"],
    ruralTag: true,
    excerpt:
      "Simple, practical stress management techniques that can be used in rural settings without specialized equipment or clinics -- breathing, social support, routine.",
    content: `Stress management does not require a clinic, therapist, or medication. Many of the most effective techniques are simple, free, and can be practiced anywhere -- including in villages, fields, and homes across rural Pakistan.

Understanding Stress in Rural Context

Rural residents face stressors that are often invisible to policymakers and healthcare systems: crop failure, debt, water scarcity, limited education access, domestic conflict, and post-disaster recovery. Acknowledging that these stressors are real -- and that stress is a medical issue, not a moral one -- is the first step.

Low-Resource Stress Management Techniques

1. Deep Breathing (Saans Lena)
Slow, deep breathing activates the body's relaxation response. Practice:
• Breathe in through the nose for 4 counts
• Hold for 2 counts
• Breathe out through the mouth for 6 counts
• Repeat 5–10 times
This can be done anywhere -- in the field, at home, or before sleep.

2. Prayer and Spirituality
For many rural Pakistanis, regular prayer (namaz), dhikr, and Quranic recitation serve as natural stress management tools. These practices calm the mind, regulate breathing, and provide a sense of meaning and connection.

3. Social Bonding (Mahol aur Saath)
Talking to a trusted family member, elder, or friend reduces the burden of stress significantly. In rural settings, community gatherings (mosque, chaupal, community meetings) can serve as informal support networks.

4. Physical Activity
Farming and physical labor provide some stress relief through activity. When possible, additional movement -- walking in the evening, light stretching -- supports mental health.

5. Routine and Predictability
In chaotic circumstances (floods, displacement), maintaining small routines -- prayer times, mealtimes, sleeping schedules -- provides psychological stability.

6. Talking to Community Leaders and MHOs
Mental Health Officers (MHOs) at PUZ program sites (Matli, Sehwan, Makli, Khorwah, Shadilarge, Badin, Nokundi, Saranana) are trained to provide basic counseling and stress management guidance without judgment.

When to Refer

If stress leads to persistent inability to sleep, eat, work, or care for family -- or if someone expresses thoughts of self-harm -- refer them to the nearest PUZ psychologist or MHO immediately.

Reference: WHO Mental Health Action Plan; PUZ Program MHO Training Manual 2024`,
    url: "https://www.who.int/mental_health",
    image: null,
  },
  {
    id: 6,
    title: "Depression in Women in Rural Areas: An Unspoken Reality",
    date: "November 2025",
    author: "Pur Umeed Zindagi, IHHN",
    category: "Depression",
    categories: ["Depression", "Rural Mental Health"],
    ruralTag: true,
    excerpt:
      "Women in rural areas face double the risk of depression due to domestic pressure, lack of autonomy, poverty, and cultural silence. This article sheds light on a neglected issue.",
    content: `Women in rural Pakistan face an elevated risk of depression that is rarely acknowledged and even more rarely treated. Epidemiological data from IHHN and WHO indicate that women in low-income rural settings are twice as likely to develop clinical depression as men -- yet barriers to care are significantly higher.

Prevalence and Scope

In rural Pakistan, studies suggest that 30–50% of women presenting at primary care facilities have significant depressive symptoms. Many of these women have been suffering for years without diagnosis or treatment, their symptoms attributed to physical illness, family conflict, or divine will.

Risk Factors Specific to Rural Women

1. Early Marriage — Child and adolescent brides face abrupt transitions, loss of education, and reduced agency, all major risk factors for depression.

2. Domestic Pressure and Violence — Intimate partner violence is significantly underreported in rural settings. Violence, control, and humiliation are powerful triggers for depression.

3. Poverty and Food Insecurity — Women often eat last and least in poor households. Nutritional deficiency compounds depression risk.

4. Loss of Autonomy — Limited mobility, no financial independence, and restricted social interaction create conditions for learned helplessness -- a core psychological component of depression.

5. Repeated Pregnancy and Postpartum Depression — Rural women often have multiple closely-spaced pregnancies. Postpartum depression is underdiagnosed and untreated in rural settings.

6. Isolation — Extended family systems can be supportive, but they can also amplify pressure, judgment, and stigma.

Barriers to Care

• Requirement for husband or male family member's permission to seek care
• Distance to health facilities
• Cost of transportation and consultation
• Fear of stigma and family shame
• Belief that emotional distress is not a medical issue

Role of Female MHOs in PUZ Program

The Pur Umeed Zindagi program has strategically placed female MHOs in several sites -- including Civil Hospital Badin, Khorwah, Shadilarge, and Sehwan -- specifically to provide culturally acceptable, private mental health support for women.

The PHQ-4 screening tool is used to identify likely depression cases, which are then referred to regional psychologists.

Safe Spaces and Community Action

Creating safe spaces -- physically and emotionally -- where rural women can speak openly about their distress is a core component of sustainable mental health support. Community health workers, school teachers, and religious leaders play a critical role.

Reference: WHO Gender and Mental Health Report; IHHN PUZ Program Data 2024–2026; WHO Depression Fact Sheet`,
    url: "https://www.who.int/news-room/fact-sheets/detail/depression",
    image: null,
  },
  {
    id: 7,
    title: "What Stress Does to Your Body and Mind",
    date: "October 2025",
    author: "Pur Umeed Zindagi, IHHN",
    category: "Stress",
    categories: ["Stress"],
    ruralTag: false,
    excerpt:
      "Stress is not just a feeling -- it has real physical and mental health consequences. Understand the stress response, its effects, and healthy coping strategies.",
    content: `Most people experience stress as a feeling -- tension, pressure, worry. But stress is far more than an emotion. It is a physiological cascade that affects every organ system in the body, and when it becomes chronic, it becomes a serious medical concern.

The Stress Response: Fight-or-Flight

When the brain perceives a threat -- real or imagined -- it activates the hypothalamic-pituitary-adrenal (HPA) axis. This triggers the release of stress hormones, primarily cortisol and adrenaline.

Acute effects:
• Heart rate increases to pump blood to muscles
• Breathing quickens
• Blood sugar spikes for energy
• Digestion pauses
• Immune response temporarily activates

This response is adaptive for short-term threats. The problem arises when the stress response becomes chronic -- activated day after day with no resolution.

Physical Effects of Chronic Stress

1. Cardiovascular System
Chronic cortisol elevation increases blood pressure, promotes arterial inflammation, and significantly raises the risk of heart attack and stroke.

2. Immune System
Prolonged stress suppresses immune function, making individuals more susceptible to infections, slower wound healing, and increased cancer risk.

3. Digestive System
Stress causes acid reflux, stomach ulcers, IBS (irritable bowel syndrome), and disrupts gut microbiome balance.

4. Sleep and Fatigue
Cortisol interferes with melatonin production, causing insomnia. Paradoxically, chronic stress also causes fatigue -- the body simply wears out.

5. Musculoskeletal System
Tension headaches, neck pain, back pain, and jaw clenching are common physical manifestations of chronic stress.

Mental Effects of Chronic Stress

• Anxiety: Chronic stress primes the brain's threat-detection system, leading to generalized anxiety
• Depression: Cortisol damages the hippocampus, impairing memory and mood regulation
• Cognitive Impairment: Difficulty concentrating, forgetfulness, poor decision-making
• Burnout: Complete mental and physical exhaustion

Acute vs. Chronic Stress

Acute stress (before an exam, during a crisis) is normal and often beneficial. Chronic stress (ongoing financial trouble, relationship conflict, job insecurity) is harmful and must be actively managed.

Healthy Coping Strategies

• Regular physical activity (30 minutes, most days)
• Social connection and talking to trusted people
• Mindfulness, prayer, and breathing practices
• Adequate sleep (7–9 hours)
• Limiting caffeine, tobacco, and alcohol
• Professional help when coping fails

Reference: WHO Mental Health and Physical Health; Sapolsky R. "Why Zebras Don't Get Ulcers"; APA Stress Research`,
    url: "https://www.who.int/mental_health",
    image: null,
  },
  {
    id: 8,
    title: "Mental Health in Rural Sindh and Balochistan: PUZ Program Impact",
    date: "September 2025",
    author: "Pur Umeed Zindagi, IHHN",
    category: "Rural Mental Health",
    categories: ["Rural Mental Health"],
    ruralTag: true,
    excerpt:
      "The Pur Umeed Zindagi program has reached thousands of patients across rural Sindh and Balochistan. This report highlights the mental health challenges and successes in these underserved communities.",
    content: `The Pur Umeed Zindagi (PUZ) program -- "Life Full of Hope" -- is a community mental health initiative under Indus Hospital & Health Network (IHHN). It is one of the few programs in Pakistan systematically delivering mental health services to remote rural communities.

Program Reach: Sindh and Balochistan

In rural Sindh, PUZ operates at:
• Civil Hospital Badin (CHB) -- Nayab Suhail, Arshad Khuwaja, Sughra Kumbhar, Syed Shahzaib, Faizan
• Matli (PCP) -- Bilquees Bano Shah, Meer Hassan
• Sehwan (PCP) -- Hameeda Burdi
• Makli (PCP) -- Samren Shahani, Lal Bux
• Khorwah (PCP) -- Zubaida Jamali, Tafseer Memon
• Shadilarge (PCP) -- Muqadas Ansari, Ahmer Ali
• MMB (Medical Mobile Bus, Sindh) -- Raheela Kashif

In rural Balochistan, PUZ operates at:
• Saranana (PCP) -- Bibi Safia
• Nokundi (PCP) -- Asiya Nawab

Types of Mental Health Issues Encountered

Field data from MHOs across these sites consistently shows three primary presentations:

1. Depression (40–50% of cases) -- Most common, often presenting as somatic complaints (body pain, fatigue, weakness)
2. Anxiety (25–35% of cases) -- Worry, sleep disturbance, panic symptoms
3. Stress-related disorders (15–20% of cases) -- Adjustment disorders, acute stress reactions, post-flood trauma

Patient Data Highlights (2025)

• Screening: Over 250,000 individuals screened through PUZ sites
• Enrollment: 13,000+ patients enrolled in treatment programs
• End of Treatment (EOT): 1,000+ patients completing treatment cycles

The Role of MHOs

MHOs are the backbone of PUZ's rural reach. They:
• Conduct door-to-door awareness campaigns
• Screen patients using PHQ-4 and GAD-7 tools
• Provide basic counseling and psychoeducation
• Facilitate support groups
• Refer moderate-to-severe cases to regional psychologists

Success Stories (Anonymized)

"A 34-year-old woman in Sehwan presented with severe depression following the 2022 floods. After six months of MHO support and psychologist consultation, she returned to caring for her family and started a small embroidery business."

"A 28-year-old male farmer in Badin, burdened by debt and crop failure, was screened at CHB and enrolled in PUZ's program. Combination of counseling and antidepressant medication over 8 months led to significant improvement."

Future Plans

PUZ aims to expand to additional rural sites, increase MHO capacity, and integrate mental health screening into routine primary care across all IHHN sites.

Reference: IHHN PUZ Program Annual Reports 2024–2025; IHHN Monitoring and Evaluation Data`,
    url: "https://www.ihhn.org",
    image: null,
  },
  {
    id: 9,
    title: "Recognizing Depression Early: Signs You Should Not Ignore",
    date: "August 2025",
    author: "Pur Umeed Zindagi, IHHN",
    category: "Depression",
    categories: ["Depression"],
    ruralTag: false,
    excerpt:
      "Early recognition of depression can save lives. This article outlines the key warning signs, explains how depression progresses, and encourages seeking help without shame.",
    content: `Depression rarely arrives all at once. It creeps in gradually -- a fading of color from everyday life, a heaviness that does not lift, a quiet withdrawal from the world. The earlier it is recognized, the better the outcome.

Why Early Recognition Matters

Untreated depression worsens over time. What begins as mild symptoms can deepen into severe, treatment-resistant depression with suicidal ideation. Early intervention:
• Prevents escalation to severe depression
• Reduces the duration of the episode
• Preserves work, relationships, and social function
• Dramatically reduces the risk of suicide

Warning Signs: What to Watch For

Mood Changes
• Persistent sadness, tearfulness, or emptiness lasting more than 2 weeks
• Irritability, frustration, or anger -- especially in men and adolescents
• Feeling hopeless, helpless, or worthless
• Loss of interest in things once enjoyed (hobbies, relationships, food)

Energy and Sleep
• Unusual fatigue or exhaustion not explained by physical activity
• Sleeping too much (hypersomnia) or insomnia
• Difficulty getting out of bed in the morning

Thinking and Concentration
• Difficulty focusing, remembering, or making decisions
• Slowed thinking or speech
• Negative, self-critical thought patterns

Physical Symptoms
• Unexplained aches and pains (especially common in South Asian cultures)
• Changes in appetite -- eating much more or much less
• Significant weight change

The Most Serious Warning Signs
• Thoughts of death or dying
• Feeling like a burden to others
• Making arrangements or giving away possessions
• Direct statements about wanting to die or not wanting to live

These require immediate professional attention.

How Depression Progresses Without Treatment

Mild → Moderate → Severe: Without intervention, depression typically worsens. Each episode increases the risk of future episodes. Untreated depression contributes to substance abuse, relationship breakdown, chronic physical illness, and suicide.

How PUZ MHOs Can Help

Mental Health Officers at PUZ program sites are trained to:
• Use PHQ-4 and PHQ-9 for early detection
• Provide psychoeducation to patients and families
• Offer brief counseling and behavioral activation techniques
• Facilitate timely referral to psychologists and psychiatrists

Seeking help is not weakness. Depression is a medical condition -- as treatable as diabetes or hypertension.

Reference: WHO Depression Fact Sheet 2023; DSM-5 Clinical Criteria; IHHN PUZ Program MHO Training Manual`,
    url: "https://www.who.int/news-room/fact-sheets/detail/depression",
    image: null,
  },
  {
    id: 10,
    title:
      "Anxiety and Stress in Post-Flood Communities: Lessons from Rural Pakistan",
    date: "July 2025",
    author: "Pur Umeed Zindagi, IHHN",
    category: "Rural Mental Health",
    categories: ["Rural Mental Health", "Anxiety", "Stress"],
    ruralTag: true,
    excerpt:
      "The 2022 floods devastated rural Pakistan and left a mental health crisis in their wake. This article examines ongoing anxiety and stress in flood-affected communities and how the PUZ program is responding.",
    content: `The 2022 super-floods in Pakistan were among the worst climate disasters in the country's history. Over 33 million people were affected, with rural Sindh and Balochistan bearing the greatest burden. Entire villages were submerged. Livelihoods were destroyed. Families lost members, homes, and everything they had built over generations.

Three years later, the mental health consequences are still unfolding.

The Mental Health Spectrum: Stress, Anxiety, and PTSD

Post-disaster mental health follows a continuum:

1. Acute Stress Response (days to weeks after the event)
• Shock, numbness, disbelief
• Hyperarousal (constant alertness, difficulty sleeping)
• Emotional outbursts or emotional blunting
• Intrusive memories

2. Prolonged Stress and Anxiety (weeks to months)
• Chronic worry about recurrence
• Economic anxiety from destroyed livelihoods
• Displacement anxiety (living in camps, uncertain housing)
• Disrupted social networks and community bonds

3. PTSD and Clinical Anxiety (months to years)
• Flashbacks and nightmares
• Avoidance of flood-related triggers
• Hypervigilance (especially during rains)
• Persistent feelings of danger and threat

Impact on Rural Sindh and Balochistan

Field reports from PUZ MHOs in Badin, Sehwan, Makli, and Balochistan sites document:
• Significantly elevated PHQ-4 scores in flood-affected communities
• High rates of sleep disturbance and somatic complaints
• Increased domestic conflict and substance use
• Children presenting with school refusal and regression
• Women reporting profound helplessness and hopelessness

PUZ's Rapid and Sustained Response

Immediate response (2022–2023):
• Psychological First Aid (PFA) training for healthcare workers at Civil Hospital Badin
• MMB (Mobile Mental Health Bus) deployed to inaccessible flood-affected areas
• Community-based psychosocial support groups established

Ongoing response (2024–2026):
• Integration of trauma-informed screening at all PCP sites
• Collaboration with ICON (IHHN's annual conference) on PFA training -- sessions facilitated in December 2025 and January 2026
• Long-term follow-up of severely affected patients through regional psychologists

Community-Based Psychosocial Support

Research consistently shows that community-based approaches are most effective for post-disaster mental health:
• Re-establishing social connections and community cohesion
• Practical support (livelihood restoration) reduces anxiety as much as clinical care
• Cultural and religious frameworks (community prayer, storytelling, mourning rituals) support recovery

Climate Change and the Future

With climate change increasing the frequency and severity of floods in rural Pakistan, the need for sustained, community-embedded mental health services in disaster-prone areas is not a luxury -- it is a necessity.

Reference: WHO Psychological First Aid Field Guide; IHHN Flood Response Reports 2022–2024; PUZ Field Data 2024–2026`,
    url: "https://www.who.int/mental_health",
    image: null,
  },
];

const categories = [
  "All",
  "Stress",
  "Anxiety",
  "Depression",
  "Rural Mental Health",
];

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const filtered =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((b) => b.categories.includes(selectedCategory));

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
          <p className="text-white/85 text-base leading-relaxed">
            Articles on{" "}
            <span className="font-semibold text-white">
              Stress, Anxiety &amp; Depression
            </span>{" "}
            with a focus on{" "}
            <span className="font-semibold text-white">
              Rural Communities in Pakistan
            </span>
            . Curated by Pur Umeed Zindagi, IHHN.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/15 text-white border border-white/25">
              <MapPin className="w-3 h-3" />
              Rural Areas Focus
            </span>
            <a
              href="https://www.who.int/mental_health"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/15 text-white border border-white/25 hover:bg-white/25 transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              Source: WHO & IHHN
            </a>
          </div>
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
              data-ocid="blogs.filter.tab"
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
        {filtered.length === 0 ? (
          <div
            data-ocid="blogs.empty_state"
            className="text-center py-20"
            style={{ color: "oklch(55% 0.04 145)" }}
          >
            <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-40" />
            <p className="text-lg font-medium">No articles in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((blog, idx) => (
              <div
                key={blog.id}
                data-ocid={`blogs.item.${idx + 1}`}
                className="bg-white rounded-2xl overflow-hidden border flex flex-col group cursor-pointer hover:shadow-lg transition-shadow"
                style={{ borderColor: "oklch(90% 0.02 145)" }}
                onClick={() => setSelectedBlog(blog)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setSelectedBlog(blog);
                }}
                aria-label={`Read article: ${blog.title}`}
              >
                {/* Placeholder Image Banner */}
                <div
                  className="h-44 flex flex-col items-center justify-center relative"
                  style={{ background: getCategoryGradient(blog.category) }}
                >
                  <BookOpen className="w-10 h-10 text-white/50" />
                  {blog.ruralTag && (
                    <span
                      className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ background: "oklch(35% 0.2 145)" }}
                    >
                      <MapPin className="w-3 h-3" />
                      Rural Areas
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "oklch(40% 0.2 145)" }}
                    >
                      {blog.category}
                    </span>
                    {blog.ruralTag && (
                      <span
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium text-white"
                        style={{ background: "oklch(42% 0.18 145)" }}
                      >
                        <MapPin className="w-2.5 h-2.5" />
                        Rural
                      </span>
                    )}
                  </div>
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
                    <span
                      className="flex items-center gap-1 text-xs"
                      style={{ color: "oklch(55% 0.04 145)" }}
                    >
                      <Calendar className="w-3 h-3" />
                      {blog.date}
                    </span>
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
        )}

        {/* About / Source */}
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
              About the Source
            </span>
          </div>
          <p className="text-sm mb-3" style={{ color: "oklch(40% 0.06 145)" }}>
            Articles curated by <strong>Pur Umeed Zindagi, IHHN</strong> --
            drawing from WHO, global mental health research, and field data from
            rural Pakistan programs across Sindh, Balochistan, and Punjab.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.who.int/mental_health"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "oklch(35% 0.2 145)" }}
            >
              <ExternalLink className="w-4 h-4" />
              WHO Mental Health
            </a>
            <a
              href="https://www.ihhn.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
              style={{
                background: "oklch(93% 0.04 145)",
                color: "oklch(30% 0.15 145)",
                border: "1px solid oklch(75% 0.1 145)",
              }}
            >
              <ExternalLink className="w-4 h-4" />
              IHHN.org
            </a>
          </div>
        </div>
      </div>

      {/* Article Modal */}
      {selectedBlog && (
        <div
          data-ocid="blogs.modal"
          className="fixed inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto"
          style={{ background: "rgba(0,0,0,0.6)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedBlog(null);
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") setSelectedBlog(null);
          }}
          aria-modal="true"
          aria-label="Article detail"
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
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "oklch(40% 0.2 145)" }}
                  >
                    {selectedBlog.category}
                  </span>
                  {selectedBlog.ruralTag && (
                    <span
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium text-white"
                      style={{ background: "oklch(42% 0.18 145)" }}
                    >
                      <MapPin className="w-2.5 h-2.5" />
                      Rural Areas
                    </span>
                  )}
                </div>
                <h2
                  className="text-lg font-bold mt-1 leading-snug"
                  style={{ color: "oklch(20% 0.08 145)" }}
                >
                  {selectedBlog.title}
                </h2>
                <div className="flex items-center gap-4 mt-2 flex-wrap">
                  <span
                    className="flex items-center gap-1 text-xs"
                    style={{ color: "oklch(55% 0.04 145)" }}
                  >
                    <Calendar className="w-3 h-3" />
                    {selectedBlog.date}
                  </span>
                  <span
                    className="flex items-center gap-1 text-xs"
                    style={{ color: "oklch(55% 0.04 145)" }}
                  >
                    <User className="w-3 h-3" />
                    {selectedBlog.author}
                  </span>
                </div>
              </div>
              <button
                type="button"
                data-ocid="blogs.close_button"
                onClick={() => setSelectedBlog(null)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
                aria-label="Close article"
              >
                <X
                  className="w-5 h-5"
                  style={{ color: "oklch(40% 0.04 145)" }}
                />
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-5">
              <div
                className="text-sm leading-relaxed whitespace-pre-line"
                style={{ color: "oklch(30% 0.05 145)" }}
              >
                {selectedBlog.content}
              </div>

              <div
                className="mt-6 pt-4 border-t"
                style={{ borderColor: "oklch(92% 0.02 145)" }}
              >
                <p
                  className="text-xs mb-3"
                  style={{ color: "oklch(55% 0.04 145)" }}
                >
                  <strong>Source:</strong> WHO / Pur Umeed Zindagi, IHHN
                </p>
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <p
                    className="text-xs italic"
                    style={{ color: "oklch(60% 0.03 145)" }}
                  >
                    Articles curated by Pur Umeed Zindagi, IHHN -- drawing from
                    WHO, global mental health research, and field data from
                    rural Pakistan programs.
                  </p>
                  <a
                    href={selectedBlog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="blogs.primary_button"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90 flex-shrink-0"
                    style={{ background: "oklch(35% 0.2 145)" }}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Read on Blog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function getCategoryGradient(category: string): string {
  switch (category) {
    case "Rural Mental Health":
      return "linear-gradient(135deg, oklch(30% 0.18 145), oklch(45% 0.22 145))";
    case "Anxiety":
      return "linear-gradient(135deg, oklch(35% 0.15 200), oklch(48% 0.18 210))";
    case "Depression":
      return "linear-gradient(135deg, oklch(30% 0.1 270), oklch(42% 0.15 265))";
    case "Stress":
      return "linear-gradient(135deg, oklch(38% 0.15 30), oklch(50% 0.2 35))";
    default:
      return "linear-gradient(135deg, oklch(35% 0.12 145), oklch(48% 0.16 145))";
  }
}
