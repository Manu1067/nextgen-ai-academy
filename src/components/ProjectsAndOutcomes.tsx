import React, { useState } from 'react';
import { MessageSquare, FileText, Workflow, CheckCircle, Play, Sparkles, Send, RefreshCw, Cpu } from 'lucide-react';
import { PROJECTS } from '../data/coursesData';
import studyVisual from '../assets/images/project_study_assistant_1794244913878.jpg';

export const ProjectsAndOutcomes: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('study-assistant');

  // Interactive simulation state for the chosen project
  const [chatbotInput, setChatbotInput] = useState('');
  const [chatbotMessages, setChatbotMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([
    { sender: 'bot', text: 'Hello! I am an AI agent with semantic vector memory. Ask me anything about modern transformer architectures or fine-tuning techniques.' }
  ]);

  const [studyDocument, setStudyDocument] = useState<'deep_learning' | 'attention_is_all_you_need'>('attention_is_all_you_need');
  const [isProcessing, setIsProcessing] = useState(false);
  const [studyOutput, setStudyOutput] = useState<{ summary: string; flashcards: string[] }>({
    summary: 'The Transformer model architecture abandons recurrence and convolutions entirely, relying solely on self-attention mechanisms to compute representations of its input and output sequences.',
    flashcards: [
      'Q: What replaces recurrent units in Transformer architectures? \nA: Multi-Head Self-Attention layers.',
      'Q: Why is self-attention faster to train than RNNs? \nA: Because operations across tokens can be parallelized simultaneously on GPUs.'
    ]
  });

  const [automationStep, setAutomationStep] = useState<number>(0);
  const [isAutomating, setIsAutomating] = useState<boolean>(false);

  const selectedProject = PROJECTS.find((p) => p.id === selectedProjectId) || PROJECTS[0];

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatbotInput.trim()) return;

    const userText = chatbotInput;
    setChatbotMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setChatbotInput('');

    setTimeout(() => {
      setChatbotMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: `[Grounded Response based on vector indexed docs]: When addressing "${userText}", attention mechanisms compute query-key dot products scaled by the square root of the key dimension, preventing gradient saturation in deep networks.`
        }
      ]);
    }, 450);
  };

  const handleRunStudyAnalysis = () => {
    setIsProcessing(true);
    setTimeout(() => {
      if (studyDocument === 'deep_learning') {
        setStudyOutput({
          summary: 'Deep neural networks learn hierarchical representations through stacked linear transformations and non-linear activations, optimizing loss functions via backpropagation.',
          flashcards: [
            'Q: What is the vanishing gradient problem? \nA: Gradients shrinking exponentially as they backpropagate through deep layers.',
            'Q: How do residual connections mitigate degradation? \nA: By providing identity shortcut skip paths for gradient flow.'
          ]
        });
      } else {
        setStudyOutput({
          summary: 'The Transformer architecture discards recurrence for multi-head self-attention, achieving state-of-the-art BLEU scores with significantly reduced training time.',
          flashcards: [
            'Q: What does positional encoding achieve? \nA: It injects sequence order information that permutation-invariant self-attention lacks.',
            'Q: What is the dimensionality of typical embeddings in base transformers? \nA: 512 dimensions across 8 parallel attention heads.'
          ]
        });
      }
      setIsProcessing(false);
    }, 600);
  };

  const handleTriggerAutomation = () => {
    setIsAutomating(true);
    setAutomationStep(1);

    setTimeout(() => setAutomationStep(2), 700);
    setTimeout(() => setAutomationStep(3), 1400);
    setTimeout(() => {
      setAutomationStep(4);
      setIsAutomating(false);
    }, 2100);
  };

  return (
    <section id="projects" className="py-24 bg-slate-900/40 relative border-t border-slate-800/60">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 tracking-wider uppercase">
            <span>Portfolio Capstone Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Production Projects You Will Build
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            Graduate with deployed software that proves your engineering capabilities to potential employers, technical founders, and clients.
          </p>

          {/* Project selector buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {PROJECTS.map((project) => {
              const isSelected = project.id === selectedProjectId;
              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setSelectedProjectId(project.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {project.id === 'ai-chatbot' && <MessageSquare className="w-4 h-4" />}
                  {project.id === 'study-assistant' && <FileText className="w-4 h-4" />}
                  {project.id === 'automated-workflow' && <Workflow className="w-4 h-4" />}
                  <span>{project.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Project Detailed Showcase Card */}
        <div className="rounded-2xl bg-slate-950 border border-indigo-900/70 p-6 sm:p-10 shadow-2xl text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Project Specs */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-indigo-400 font-mono">
                  <span>{selectedProject.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>Capstone Spec</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {selectedProject.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Technologies unboxed (Zero-Pill) */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Core Technologies & Libraries
                </span>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300 font-mono">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className="flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture highlights */}
              <div className="space-y-2.5 pt-4 border-t border-slate-800">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Engineering Invariants
                </span>
                {selectedProject.architecturePoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Key Outcome */}
              <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-900/50 space-y-1">
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                  Verified Outcome
                </span>
                <p className="text-xs sm:text-sm text-slate-200 font-medium">
                  {selectedProject.outcome}
                </p>
              </div>
            </div>

            {/* Right: Live Interactive Simulation Preview */}
            <div className="lg:col-span-6">
              {/* Project 1: Chatbot Simulation */}
              {selectedProject.id === 'ai-chatbot' && (
                <div className="rounded-xl bg-slate-900 border border-indigo-950 shadow-2xl p-4 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                    <span className="font-semibold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Interactive Agent Sandbox
                    </span>
                    <span className="text-slate-400">Context Memory Active</span>
                  </div>

                  <div className="space-y-3 h-64 overflow-y-auto pr-2 text-xs">
                    {chatbotMessages.map((msg, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-xl max-w-[85%] leading-relaxed ${
                          msg.sender === 'user'
                            ? 'ml-auto bg-indigo-600 text-white rounded-br-none'
                            : 'bg-slate-950 text-slate-200 border border-slate-800 rounded-bl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                    ))}
                  </div>

                  {/* Quick question suggestion chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {[
                      'What is Retrieval-Augmented Generation?',
                      'Explain self-attention simply',
                      'How do agents handle tool errors?'
                    ].map((chip, cIdx) => (
                      <button
                        key={cIdx}
                        type="button"
                        onClick={() => {
                          setChatbotMessages((prev) => [...prev, { sender: 'user', text: chip }]);
                          setTimeout(() => {
                            setChatbotMessages((prev) => [
                              ...prev,
                              {
                                sender: 'bot',
                                text: chip.includes('Retrieval')
                                  ? '[RAG Invariant]: Retrieval-Augmented Generation bridges parametric LLM memory with non-parametric external vector indexes, eliminating stale knowledge without retraining.'
                                  : chip.includes('self-attention')
                                  ? '[Self-Attention]: Computes pairwise dynamic relevance weights between all sequence tokens simultaneously via Query, Key, and Value matrix projections.'
                                  : '[Agent Tool Recovery]: Uses exponential backoff with schema assertion guards and fallback execution branches.'
                              }
                            ]);
                          }, 400);
                        }}
                        className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 hover:border-indigo-500/60 text-[11px] text-slate-300 hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleSendChat} className="flex items-center gap-2 pt-2 border-t border-slate-800">
                    <input
                      type="text"
                      value={chatbotInput}
                      onChange={(e) => setChatbotInput(e.target.value)}
                      placeholder="Ask the AI agent a technical question..."
                      aria-label="Ask the AI agent a technical question"
                      className="flex-1 bg-slate-950 border border-slate-800 focus:border-indigo-500 focus-visible:ring-1 focus-visible:ring-indigo-400 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none"
                    />
                    <button
                      type="submit"
                      aria-label="Send message to AI assistant"
                      className="p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                  <p className="text-[11px] text-slate-500 text-center">
                    Simulated RAG search demonstrating citation and token latency.
                  </p>
                </div>
              )}

              {/* Project 2: Intelligent Study Assistant */}
              {selectedProject.id === 'study-assistant' && (
                <div className="rounded-xl overflow-hidden border border-indigo-950 bg-slate-900 shadow-2xl space-y-4">
                  {/* High quality visual render preview */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={studyVisual}
                      alt="Intelligent study assistant knowledge graph and document analysis dashboard"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                      <span className="font-semibold flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-indigo-400" />
                        Multi-Doc Retrieval Pipeline
                      </span>
                      <span className="text-slate-300">FastAPI + Vector Engine</span>
                    </div>
                  </div>

                  {/* Interactive controls */}
                  <div className="p-4 sm:p-5 pt-0 space-y-3">
                    <div className="flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2">
                        <label htmlFor="doc-select" className="text-slate-400 font-medium">Document:</label>
                        <select
                          id="doc-select"
                          value={studyDocument}
                          onChange={(e) => setStudyDocument(e.target.value as any)}
                          className="bg-slate-950 border border-slate-800 text-slate-200 rounded px-2.5 py-1 text-xs focus:outline-none focus:border-indigo-500"
                        >
                          <option value="attention_is_all_you_need">Attention Is All You Need (Vaswani et al.)</option>
                          <option value="deep_learning">Deep Learning Foundations (Bishop 2023)</option>
                        </select>
                      </div>

                      <button
                        type="button"
                        onClick={handleRunStudyAnalysis}
                        disabled={isProcessing}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition-colors cursor-pointer disabled:opacity-50"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${isProcessing ? 'animate-spin' : ''}`} />
                        <span>Synthesize</span>
                      </button>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs space-y-2">
                      <div className="text-indigo-300 font-semibold">Generative Executive Summary:</div>
                      <p className="text-slate-300 leading-relaxed text-[11px]">{studyOutput.summary}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-xs space-y-1.5">
                      <div className="text-purple-300 font-semibold">Generated Spaced-Recall Flashcards:</div>
                      {studyOutput.flashcards.map((card, i) => (
                        <p key={i} className="text-slate-400 text-[11px] whitespace-pre-line border-l border-indigo-500/40 pl-2">
                          {card}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Project 3: Automated Content Workflow */}
              {selectedProject.id === 'automated-workflow' && (
                <div className="rounded-xl bg-slate-900 border border-indigo-950 shadow-2xl p-5 sm:p-6 space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                    <span className="font-semibold text-white flex items-center gap-2">
                      <Workflow className="w-4 h-4 text-indigo-400" />
                      Autonomous Event-Driven Pipeline
                    </span>
                    <button
                      type="button"
                      onClick={handleTriggerAutomation}
                      disabled={isAutomating}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition-colors cursor-pointer disabled:opacity-50"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>{isAutomating ? 'Running Pipeline...' : 'Test Run Pipeline'}</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div className={`p-3 rounded-lg border text-xs transition-all ${
                      automationStep >= 1 ? 'bg-indigo-950/60 border-indigo-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-500'
                    }`}>
                      <div className="flex items-center justify-between font-semibold">
                        <span>1. RSS Ingestion & Deduplication</span>
                        {automationStep >= 1 && <span className="text-emerald-400">Completed (12 articles parsed)</span>}
                      </div>
                    </div>

                    <div className={`p-3 rounded-lg border text-xs transition-all ${
                      automationStep >= 2 ? 'bg-indigo-950/60 border-indigo-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-500'
                    }`}>
                      <div className="flex items-center justify-between font-semibold">
                        <span>2. LLM Fact Synthesis & JSON Structuring</span>
                        {automationStep >= 2 && <span className="text-emerald-400">Validated JSON Schemas</span>}
                      </div>
                    </div>

                    <div className={`p-3 rounded-lg border text-xs transition-all ${
                      automationStep >= 3 ? 'bg-indigo-950/60 border-indigo-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-500'
                    }`}>
                      <div className="flex items-center justify-between font-semibold">
                        <span>3. Human-in-the-Loop Review Queue</span>
                        {automationStep >= 3 && <span className="text-emerald-400">Approved by Operator</span>}
                      </div>
                    </div>

                    <div className={`p-3 rounded-lg border text-xs transition-all ${
                      automationStep >= 4 ? 'bg-purple-950/60 border-purple-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-500'
                    }`}>
                      <div className="flex items-center justify-between font-semibold">
                        <span>4. Multi-Platform Webhook Syndication</span>
                        {automationStep >= 4 && <span className="text-emerald-400">Dispatched via Webhooks</span>}
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 text-[11px] text-slate-400">
                    Students implement the entire Node.js/Python backend with retry backoff, token budgeting, and Discord/Slack webhook dispatch.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
