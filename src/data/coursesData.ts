import { Course, ProjectShowcase, Testimonial, FAQItem } from '../types';

export const COURSES: Course[] = [
  {
    id: 'intro-to-ai',
    title: 'Introduction to Artificial Intelligence',
    category: 'foundations',
    shortDescription: 'Master the fundamental concepts, history, neural networks, ethics, and modern application architectures powering the AI revolution.',
    fullDescription: 'This foundational course demystifies artificial intelligence for newcomers. You will understand how modern algorithms perceive data, explore the evolution from rule-based systems to deep neural networks, and investigate ethical AI deployment principles with hands-on Python notebooks.',
    level: 'Beginner',
    duration: '4 Weeks',
    modulesCount: 8,
    projectOutcome: 'AI Landscape Diagnostic Tool & Visual Classifier',
    learningObjectives: [
      'Understand core AI terminology: regression, classification, perceptrons, and loss functions',
      'Learn how neural networks learn patterns via feed-forward passes and backpropagation',
      'Differentiate computer vision and natural language processing pipelines',
      'Analyze algorithmic bias, fairness guidelines, and responsible AI guardrails'
    ],
    skills: ['AI Terminology', 'Neural Network Intuition', 'Model Evaluation', 'AI Safety & Ethics'],
    syllabus: [
      { week: 'Week 1', title: 'Foundations of Modern AI', topics: ['History and milestones of AI', 'Rule-based systems vs. statistical learning', 'Data preprocessing basics'] },
      { week: 'Week 2', title: 'Neural Networks Decoded', topics: ['Perceptrons and layers', 'Activation functions and loss calculation', 'Training mechanics'] },
      { week: 'Week 3', title: 'Computer Vision & NLP Basics', topics: ['Convolutional intuition', 'Tokenization and word representations', 'Real-world use cases'] },
      { week: 'Week 4', title: 'Ethics & Capstone Diagnostic Tool', topics: ['Bias, fairness, and hallucination risks', 'Building the classification tool', 'Project presentation'] }
    ],
    prerequisites: 'No prior coding experience required. Basic high-school mathematics is helpful.'
  },
  {
    id: 'generative-ai-llms',
    title: 'Generative AI and LLMs',
    category: 'engineering',
    shortDescription: 'Explore transformer architectures, context windows, token dynamics, fine-tuning fundamentals, and Retrieval-Augmented Generation (RAG).',
    fullDescription: 'Dive deep into large language models (LLMs). Learn how attention mechanisms work under the hood, how embeddings represent semantic meaning, and how to build high-accuracy retrieval systems connected to external databases and live knowledge sources.',
    level: 'Intermediate',
    duration: '6 Weeks',
    modulesCount: 12,
    projectOutcome: 'Domain-Specific RAG Knowledge Retrieval System',
    learningObjectives: [
      'Deconstruct self-attention mechanisms and transformer layer blocks',
      'Generate high-dimensional vector embeddings and index them with similarity metrics',
      'Architect production Retrieval-Augmented Generation (RAG) pipelines with re-ranking',
      'Optimize token efficiency, reduce latency, and enforce structured JSON schemas'
    ],
    skills: ['Transformers', 'Vector Embeddings', 'RAG Pipelines', 'Context Window Optimization'],
    syllabus: [
      { week: 'Week 1-2', title: 'Transformers & Token Dynamics', topics: ['Self-attention mechanics', 'Tokenizers and cost modeling', 'Context window management'] },
      { week: 'Week 3-4', title: 'Embeddings & Vector Databases', topics: ['Generating vector embeddings', 'Cosine similarity and indexing', 'Vector store integration'] },
      { week: 'Week 5-6', title: 'End-to-End RAG Engineering', topics: ['Chunking strategies and reranking', 'Hybrid search synthesis', 'Deploying the capstone RAG API'] }
    ],
    prerequisites: 'Basic Python familiarity and understanding of REST APIs.'
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering',
    category: 'productivity',
    shortDescription: 'Master zero-shot, few-shot, chain-of-thought, ReAct prompting frameworks, and automated evaluation metrics for enterprise workflows.',
    fullDescription: 'Move beyond casual prompt chat into systematic prompt engineering. Learn the formal taxonomy of prompt construction, structured output formats (JSON/Schemas), hallucination mitigation, and benchmarking frameworks to produce deterministic, production-grade outputs.',
    level: 'All Levels',
    duration: '3 Weeks',
    modulesCount: 6,
    projectOutcome: 'Enterprise Prompt Evaluation & Testing Suite',
    learningObjectives: [
      'Construct deterministic system and user prompts with boundary constraints',
      'Implement multi-step reasoning frameworks including Chain-of-Thought and ReAct loops',
      'Enforce type-safe structured outputs using Pydantic and JSON schemas',
      'Build automated regression test suites to benchmark prompt changes over time'
    ],
    skills: ['Structured Output (JSON)', 'Chain-of-Thought', 'ReAct Reasoning', 'Prompt Benchmarking'],
    syllabus: [
      { week: 'Week 1', title: 'Structural Prompt Patterns', topics: ['System vs. user prompts', 'Zero-shot and few-shot calibration', 'Delimiters and negative constraints'] },
      { week: 'Week 2', title: 'Advanced Reasoning & Tool Use', topics: ['Chain-of-thought protocols', 'ReAct action-observation loops', 'JSON schema enforcement'] },
      { week: 'Week 3', title: 'Evaluation & Benchmarking', topics: ['Automated test assertions', 'LLM-as-a-judge scoring', 'Prompt regression testing suite'] }
    ],
    prerequisites: 'Curiosity and clear analytical thinking. No programming required, though light JSON knowledge is useful.'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    category: 'engineering',
    shortDescription: 'Connect LLM agents with APIs, Webhooks, Python microservices, and autonomous tool-calling pipelines to automate real-world operations.',
    fullDescription: 'Turn static AI prompts into active automated agents. Learn how to connect language models with external APIs, databases, message queues, and scheduled jobs to execute multi-step workflows without manual intervention.',
    level: 'Intermediate',
    duration: '5 Weeks',
    modulesCount: 10,
    projectOutcome: 'Autonomous Multi-Step Lead Triage & Email Agent',
    learningObjectives: [
      'Author strict function calling definitions and connect models to external REST APIs',
      'Design multi-agent architectures with planner, executor, and reviewer roles',
      'Handle tool failure states, schema mismatches, and automated exponential retries',
      'Deploy event-driven webhook listeners with asynchronous worker queues'
    ],
    skills: ['Function Calling', 'Autonomous Agents', 'Webhook Integrations', 'Error Handling in Pipelines'],
    syllabus: [
      { week: 'Week 1', title: 'Tool Calling & Function Signatures', topics: ['JSON schemas for tools', 'Multi-tool agent orchestration', 'Execution sandboxing'] },
      { week: 'Week 2-3', title: 'Multi-Agent Choreography', topics: ['Planner-worker architecture', 'Stateful memory stores', 'Handling tool failures and retries'] },
      { week: 'Week 4-5', title: 'Production Pipeline Deployment', topics: ['Asynchronous event triggers', 'Observability and trace logging', 'Deploying the autonomous triage system'] }
    ],
    prerequisites: 'Intermediate Python or JavaScript/TypeScript and API basics.'
  },
  {
    id: 'machine-learning-fundamentals',
    title: 'Machine Learning Fundamentals',
    category: 'foundations',
    shortDescription: 'Build strong mathematical intuition and code supervised and unsupervised algorithms using scikit-learn, pandas, and data pipelines.',
    fullDescription: 'Gain a solid grasp of core classical machine learning algorithms before advancing to complex neural networks. Learn regression, classification, decision trees, clustering, feature engineering, and cross-validation techniques with clean practical datasets.',
    level: 'Intermediate',
    duration: '8 Weeks',
    modulesCount: 16,
    projectOutcome: 'Predictive Analytics & Customer Churn Model',
    learningObjectives: [
      'Implement data preprocessing, imputation, scaling, and feature selection pipelines',
      'Train, evaluate, and tune linear models, logistic regressors, and random forests',
      'Perform unsupervised clustering (K-Means) and dimensionality reduction (PCA)',
      'Interpret ROC-AUC curves, confusion matrices, and feature importance scores'
    ],
    skills: ['Supervised Learning', 'Feature Engineering', 'Scikit-Learn', 'Model Validation Metrics'],
    syllabus: [
      { week: 'Week 1-2', title: 'Data Exploratory Analysis & Wrangling', topics: ['Pandas and NumPy mastery', 'Handling outliers and missing values', 'Feature scaling'] },
      { week: 'Week 3-4', title: 'Regression & Classification', topics: ['Linear & logistic regression', 'Cost functions and gradient descent', 'Decision trees & ensembles'] },
      { week: 'Week 5-6', title: 'Unsupervised Learning & Clustering', topics: ['K-Means and hierarchical clustering', 'PCA dimensionality reduction', 'Feature importance analysis'] },
      { week: 'Week 7-8', title: 'Model Deployment & Validation', topics: ['ROC-AUC, Precision-Recall trade-offs', 'Building model inference endpoints', 'Churn prediction capstone'] }
    ],
    prerequisites: 'Basic Python programming and comfort with algebra.'
  },
  {
    id: 'ai-tools-for-productivity',
    title: 'AI Tools for Productivity',
    category: 'productivity',
    shortDescription: 'Accelerate daily engineering, research, design, and business workflows using modern AI assistants, copilot tools, and digital pipelines.',
    fullDescription: 'Designed for professionals and students seeking immediate operational leverage. Learn how to configure IDE copilots, leverage multimodal AI for document analysis, automate research synthesis, and integrate intelligent shortcuts into your daily workflow.',
    level: 'Beginner',
    duration: '2 Weeks',
    modulesCount: 4,
    projectOutcome: 'Personal AI Workflow & Research Operating Stack',
    learningObjectives: [
      'Configure IDE copilots with custom repository guidelines and keyboard hotkeys',
      'Synthesize long-form technical reports, meeting transcripts, and research PDFs',
      'Automate daily communication and project management documentation using AI tools',
      'Audit AI output accuracy and prevent confidential data leakage'
    ],
    skills: ['Developer Copilots', 'Document Intelligence', 'Multimodal Synthesis', 'Workflow Integration'],
    syllabus: [
      { week: 'Week 1', title: 'Developer & Writing Amplification', topics: ['Code completion tools & debugging', 'Drafting and refactoring strategies', 'Context-aware workspace configuration'] },
      { week: 'Week 2', title: 'Research, Synthesis & Automation', topics: ['Processing 100+ page PDFs', 'Automated meeting notes and task extraction', 'Personal productivity dashboard build'] }
    ],
    prerequisites: 'No technical prerequisites. Suitable for all disciplines.'
  }
];

export const PROJECTS: ProjectShowcase[] = [
  {
    id: 'ai-chatbot',
    title: 'Context-Aware AI Chatbot',
    category: 'Conversational Agents',
    description: 'A multi-turn conversational agent with semantic long-term memory, dynamic persona switching, and custom knowledge retrieval grounded in verified facts.',
    technologies: ['TypeScript', 'Vector DB', 'LangChain', 'FastAPI'],
    outcome: 'Handles multi-turn dialogue with zero drift, grounded answers, and sub-second token streaming.',
    architecturePoints: [
      'Semantic conversation cache to reduce redundant token consumption',
      'Hybrid dense-sparse retrieval from structured FAQ knowledge base',
      'Real-time safety guardrails and topic boundary enforcement'
    ],
    demoType: 'chatbot'
  },
  {
    id: 'study-assistant',
    title: 'Intelligent Study Assistant',
    category: 'Document Intelligence & Learning',
    description: 'An AI-powered academic companion that ingests textbooks and lecture notes to produce concept maps, active recall flashcards, and interactive practice exams.',
    technologies: ['Python', 'Retrieval RAG', 'PDF Parsers', 'Embeddings'],
    outcome: 'Synthesizes 200+ page syllabus documents into structured revision summaries and self-scoring tests.',
    architecturePoints: [
      'Document chunking with preserved table and LaTeX equation formatting',
      'Spaced repetition algorithm tailored to student performance history',
      'Interactive citation linking directly to original source passages'
    ],
    demoType: 'study_assistant'
  },
  {
    id: 'automated-workflow',
    title: 'Automated Content Pipeline',
    category: 'Autonomous Workflows',
    description: 'An end-to-end publishing pipeline that monitors industry RSS feeds, performs automated research synthesis, drafts technical summaries, and schedules social distribution.',
    technologies: ['Node.js', 'Webhook Queues', 'Structured Schemas', 'APIs'],
    outcome: 'Reduces weekly research and distribution cycle time by 80% with human-in-the-loop sign-off.',
    architecturePoints: [
      'Multi-source ingestion engine with automated duplicate filtering',
      'Fact-checking verification loop using cross-source validation',
      'Human-in-the-loop review queue before multi-platform distribution'
    ],
    demoType: 'automation'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Priya Sharma',
    role: 'Computer Science Undergraduate',
    background: 'Final Year Student, Engineering College',
    imageAlt: 'Priya Sharma portrait illustration',
    quote: 'The project-based approach changed everything for me. Rather than just reading theoretical papers on neural networks, I actually built a working RAG agent that indexed our campus research archives.',
    highlight: 'Built a live RAG search tool for academic research papers',
    projectBuilt: 'Campus Research Knowledge Engine'
  },
  {
    id: 't-2',
    name: 'Marcus Vance',
    role: 'Junior Software Engineer',
    background: 'Recent Graduate, Mechanical to Tech Transition',
    imageAlt: 'Marcus Vance portrait illustration',
    quote: 'As a non-CS graduate pivoting into software, NextGen AI Academy provided the structured roadmap I needed. In 8 weeks, I transitioned from basic scripting to building automated customer support agents.',
    highlight: 'Pivoted into an AI engineer role within 3 months of completion',
    projectBuilt: 'Autonomous Ticket Triage & Resolution Agent'
  },
  {
    id: 't-3',
    name: 'Elena Rostova',
    role: 'Digital Strategy Consultant',
    background: 'Business Operations & Management',
    imageAlt: 'Elena Rostova portrait illustration',
    quote: 'The focus on practical AI tooling rather than abstract mathematics allowed me to immediately automate repetitive market research tasks at my consultancy, saving our team over 15 hours every week.',
    highlight: 'Saved 15+ hours weekly through custom LLM automation pipelines',
    projectBuilt: 'Competitive Intelligence & Report Synthesizer'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Prerequisites',
    question: 'What are the prerequisites to enroll in the courses?',
    answer: 'Prerequisites depend on the specific course. Foundational courses such as "Introduction to AI", "Prompt Engineering", and "AI Tools for Productivity" require no prior programming experience—just curiosity and comfort with computers. Intermediate tracks such as "Generative AI and LLMs" and "AI Automation" recommend basic familiarity with Python or JavaScript.'
  },
  {
    id: 'faq-2',
    category: 'Structure',
    question: 'How are the courses structured and delivered?',
    answer: 'Every course follows an asynchronous, project-first pedagogy. You receive structured weekly modules containing concise conceptual breakdowns, interactive code notebooks, and step-by-step milestone challenges. You can study at your own pace, with optional weekly mentor office hours and peer code review.'
  },
  {
    id: 'faq-3',
    category: 'Projects',
    question: 'What kind of projects will I build during the program?',
    answer: 'You will build practical, production-oriented software rather than toy examples. Projects include conversational agents with vector memory, an intelligent study assistant with document retrieval, autonomous webhook-driven automation pipelines, and machine learning prediction models. All projects are built in public GitHub repositories.'
  },
  {
    id: 'faq-4',
    category: 'Certification',
    question: 'Do I receive a certificate upon completion?',
    answer: 'Yes. Upon successfully completing all weekly milestones and submitting an approved capstone project, learners receive a verifiable NextGen AI Academy Certificate of Completion. Note that this is a professional industry credential demonstrating practical project competence and is distinct from an accredited university degree.'
  },
  {
    id: 'faq-5',
    category: 'Admissions',
    question: 'How does the registration and admissions process work?',
    answer: 'Submit the application form with your academic or professional background and areas of interest. Our admissions team reviews your submission within 48 hours to confirm cohort alignment and sends an onboarding link with curriculum access and prep materials.'
  },
  {
    id: 'faq-6',
    category: 'Time Commitment',
    question: 'What is the weekly time commitment required?',
    answer: 'Most learners spend approximately 5 to 8 hours per week on foundational tracks, and 8 to 12 hours per week on technical engineering tracks. Because our learning modules are self-directed with recorded sessions, college students and working professionals can easily schedule study around their commitments.'
  }
];

export const AUDIENCE_PROFILES = [
  {
    id: 'students',
    title: 'College Students',
    tagline: 'Build an interview-ready portfolio before graduation',
    description: 'Transform classroom theoretical knowledge into deployed applications that make technical internship recruiters take immediate notice.',
    commitment: '5–8 hours / week',
    benefits: [
      'Deploy full-stack AI applications directly to GitHub',
      'Bridge the gap between theoretical math and applied APIs',
      'Flexible study schedule around semester exams and coursework'
    ],
    recommendedTrack: 'Introduction to AI + Generative AI & LLMs'
  },
  {
    id: 'graduates',
    title: 'Fresh Graduates',
    tagline: 'Bridge the university-to-industry skills gap',
    description: 'Equip yourself with the modern AI toolchain companies are hiring for right now: vector databases, prompt evaluation, and agentic workflows.',
    commitment: '10–12 hours / week',
    benefits: [
      'Master high-demand tech stacks (RAG, Embeddings, Agent tool-calling)',
      'Construct end-to-end capstones ready for technical interview deep-dives',
      'Fast-track your transition into junior AI engineering or solutions roles'
    ],
    recommendedTrack: 'Generative AI & LLMs + AI Automation'
  },
  {
    id: 'professionals',
    title: 'Working Professionals',
    tagline: 'Automate operations & future-proof your career',
    description: 'Upskill without putting your career on pause. Learn how to introduce AI automation into your team workflows, product management, or technical stack.',
    commitment: '4–6 hours / week (Weekend & Evening friendly)',
    benefits: [
      'Implement real automated pipelines that save immediate team hours',
      'Lead AI initiatives with executive literacy and practical engineering grasp',
      'Self-paced asynchronous access with dedicated evening mentor sessions'
    ],
    recommendedTrack: 'AI Tools for Productivity + Prompt Engineering'
  }
];
