import { Mail, GraduationCap, MapPin} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* ======================================================
          HERO SECTION
      ====================================================== */}
      <section className="mx-auto flex min-h-[88vh] max-w-6xl items-center px-6 py-20">
        <div className="grid w-full items-center gap-12 md:grid-cols-2">
          {/* LEFT SIDE — INTRODUCTION */}
          <div>
            <p className="mb-5 text-base font-semibold text-[#3158a5]">
            Duke University
            <span className="mx-2 text-slate-400">·</span>
            <span className="font-medium text-slate-600">
              Electrical & Computer Engineering
            </span>
          </p>

            <h1 className="text-5xl font-bold leading-tight md:text-6xl">
              Hi, I’m Tasnuba.
            </h1>

            <h2 className="mt-5 text-2xl font-semibold leading-relaxed text-slate-700">
              I build AI systems for pediatric critical care and clinical
              decision support.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              I am a PhD student in Electrical and Computer Engineering at
              Duke University, advised by Dr. Rishikesan Kamaleswaran. As a
              Graduate Research Assistant in the Kamaleswaran Lab, I work on
              representation learning, retrieval methods, large language
              models, and trustworthy clinical AI.
            </p>

            {/* MAIN BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#research"
                className="rounded-xl bg-[#012169] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Explore Research
              </a>

              <a
                href="https://drive.google.com/file/d/15x0ffXi4vHaAWisBsUPTpSzlvJAuUGXh/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:shadow-md"
              >
                View CV
              </a>
            </div>

            {/* SOCIAL / ACADEMIC LINKS */}
            <div className="mt-5 flex flex-wrap gap-3">
              {/* EMAIL */}
              <a
                href="mailto:tasnubatiha12@gmail.com"
                className="flex items-center gap-2 rounded-xl bg-[#eeebff] px-4 py-3 font-medium text-[#312e81] transition hover:-translate-y-0.5 hover:bg-[#e3ddff]"
              >
                <Mail size={19} />
                Email
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/TasnubaTiha33"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-[#eeebff] px-4 py-3 font-medium text-[#312e81] transition hover:-translate-y-0.5 hover:bg-[#e3ddff]"
              >
                <FaGithub size={19} />
                GitHub
              </a>

              {/* GOOGLE SCHOLAR */}
              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-[#eeebff] px-4 py-3 font-medium text-[#312e81] transition hover:-translate-y-0.5 hover:bg-[#e3ddff]"
              >
                <GraduationCap size={19} />
                Scholar
              </a>

              {/* LINKEDIN */}
              <a
                href="https://linkedin.com/in/TasnubaIslam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-[#eeebff] px-4 py-3 font-medium text-[#312e81] transition hover:-translate-y-0.5 hover:bg-[#e3ddff]"
              >
                <FaLinkedin size={19} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT SIDE — PROFILE PHOTO */}
          <div className="flex justify-center">
            <div className="overflow-hidden rounded-[30px] border-4 border-[#d7e0ff] bg-white shadow-xl">
              <img
                src="/images/Tasnuba.jpeg"
                alt="Tasnuba Islam"
                className="h-[430px] w-[380px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          RESEARCH SECTION
      ====================================================== */}
      <section
        id="research"
        className="border-t border-slate-200 bg-white py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          {/* RESEARCH HEADING */}
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#3158a5]">
              Research
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Building clinically meaningful AI systems
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              My research focuses on developing robust, interpretable, and
              clinically useful AI methods for pediatric critical care and
              clinical decision support.
            </p>
          </div>

          {/* RESEARCH CARDS */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* CARD 1 */}
            <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <p className="mb-4 text-sm font-bold text-[#3158a5]">01</p>

              <h3 className="text-xl font-bold text-slate-900">
                Clinical Representation Learning
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Learning meaningful patient representations from longitudinal
                electronic health records, physiological signals, and clinical
                data.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <p className="mb-4 text-sm font-bold text-[#3158a5]">02</p>

              <h3 className="text-xl font-bold text-slate-900">
                Clinical Retrieval
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Developing retrieval methods to identify clinically relevant
                patient states, trajectories, and evidence for downstream
                decision support.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <p className="mb-4 text-sm font-bold text-[#3158a5]">03</p>

              <h3 className="text-xl font-bold text-slate-900">
                Foundation Models
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Exploring large-scale models that learn generalizable
                representations from heterogeneous clinical data.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <p className="mb-4 text-sm font-bold text-[#3158a5]">04</p>

              <h3 className="text-xl font-bold text-slate-900">
                Retrieval-Augmented Generation
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Investigating retrieval-augmented language models for grounded
                clinical reasoning and decision support.
              </p>
            </div>

            {/* CARD 5 */}
            <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <p className="mb-4 text-sm font-bold text-[#3158a5]">05</p>

              <h3 className="text-xl font-bold text-slate-900">
                Multimodal Clinical AI
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Integrating structured EHR data, physiological signals,
                clinical text, and other modalities into unified patient
                representations.
              </p>
            </div>

            {/* CARD 6 */}
            <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <p className="mb-4 text-sm font-bold text-[#3158a5]">06</p>

              <h3 className="text-xl font-bold text-slate-900">
                Trustworthy Clinical AI
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Building AI systems that remain robust, interpretable,
                generalizable, and clinically meaningful in real-world
                healthcare settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
    PUBLICATIONS / ONGOING RESEARCH
====================================================== */}
<section
  id="publications"
  className="border-t border-slate-200 bg-[#f8fafc] py-24"
>
  <div className="mx-auto max-w-6xl px-6">

    {/* SECTION HEADER */}
    <div className="mb-12 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#3158a5]">
        Research Output
      </p>

      <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        Ongoing & Under Review
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        Current research spanning clinical AI, medical image analysis,
        speech emotion recognition, and efficient computer vision.
      </p>
    </div>

    {/* PAPER LIST */}
    <div className="space-y-6">

      {/* ==================================================
          PAPER 1 — PEDIATRIC SEPSIS
      ================================================== */}
      <article className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-[#e8edff] px-3 py-1 text-xs font-semibold text-[#012169]">
            Clinical AI
          </span>

          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            Abstract Accepted
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            2026
          </span>
        </div>

        <h3 className="text-xl font-bold leading-8 text-slate-900">
          Offline Reinforcement-Learning Agent for Pediatric Sepsis Triage
          and Early Action Using Synthetic ED EHR
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          M. Zhang, M. Hasannuzzaman,{" "}
          <strong className="text-[#012169]">T. Islam</strong>, M. N. Islam,
          N. Stanco, T. Choudhary, D. Chanci, H. Foote, C. Hornik,
          E. Sterrett, and R. Kamaleswaran
        </p>

        <p className="mt-3 text-sm font-medium text-[#3158a5]">
          Paediatric Research for the Future of Children (PRFC): A Global
          Forum · Geneva · 2026
        </p>

        <p className="mt-4 leading-7 text-slate-600">
          Investigating offline reinforcement learning and synthetic
          electronic health records for pediatric sepsis triage and early
          clinical action.
        </p>
      </article>

      {/* ==================================================
          PAPER 2 — SPEECH EMOTION RECOGNITION
      ================================================== */}
      <article className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-[#e8edff] px-3 py-1 text-xs font-semibold text-[#012169]">
            Speech AI
          </span>

          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
            Under Review
          </span>
        </div>

        <h3 className="text-xl font-bold leading-8 text-slate-900">
          A Unified Framework for Comparing Fusion Strategies in Speech
          Emotion Recognition: Generalization, Gender Robustness, and
          Explainability Across Bangla and Multilingual Corpora
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          <strong className="text-[#012169]">T. Islam</strong>, R. I.
          Chowdhury, G. K. Ong Michael, and R. Khan
        </p>

        <p className="mt-4 leading-7 text-slate-600">
          Studying feature-fusion strategies for speech emotion recognition
          with emphasis on cross-corpus generalization, gender robustness,
          and explainability.
        </p>
      </article>

      {/* ==================================================
          PAPER 3 — LIGHTSEG
      ================================================== */}
      <article className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-[#e8edff] px-3 py-1 text-xs font-semibold text-[#012169]">
            Medical Imaging
          </span>

          <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
            Ongoing
          </span>
        </div>

        <h3 className="text-xl font-bold leading-8 text-slate-900">
          LightSeg: An Interpretable and Lightweight Framework for Multiclass
          Fetal Ultrasound Segmentation
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          <strong className="text-[#012169]">T. Islam</strong>, R. I.
          Chowdhury, M. Haque, and S. Momen
        </p>

        <p className="mt-4 leading-7 text-slate-600">
          Developing an interpretable and computationally efficient
          segmentation framework for multiclass fetal ultrasound analysis.
        </p>
      </article>

    </div>
  </div>
</section>

{/* ======================================================
    PROJECTS SECTION
====================================================== */}
<section
  id="projects"
  className="border-t border-slate-200 bg-white py-24"
>
  <div className="mx-auto max-w-6xl px-6">

    {/* SECTION HEADER */}
    <div className="mb-12 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#3158a5]">
        Projects
      </p>

      <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        Selected Projects
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        Selected research and engineering projects across healthcare AI,
        computer vision, machine learning, and software development.
      </p>
    </div>

    {/* PROJECT GRID */}
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {/* ==================================================
          PROJECT 1 — LIGHTSEG
      ================================================== */}
      <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-[#f8fafc] p-7 transition hover:-translate-y-1 hover:shadow-lg">

        <div className="mb-5 flex items-center justify-between">
          <span className="rounded-full bg-[#e8edff] px-3 py-1 text-xs font-semibold text-[#012169]">
            Medical Imaging
          </span>

          <span className="text-sm font-semibold text-slate-400">
            01
          </span>
        </div>

        <h3 className="text-xl font-bold leading-7 text-slate-900">
          LightSeg – Fetal Head Segmentation
        </h3>

        <p className="mt-3 flex-grow leading-7 text-slate-600">
          Lightweight fetal ultrasound segmentation with DLCE hybrid loss,
          teacher–student distillation, and GradCAM++ explainability.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-600">
            Deep Learning
          </span>

          <span className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-600">
            Segmentation
          </span>

          <span className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-600">
            Explainable AI
          </span>
        </div>

        <div className="mt-6">
          <a
            href="https://github.com/TasnubaTiha33/Lightseg-A-Fetal-Head-Segmentation-Approach"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#012169] transition hover:underline"
          >
            View on GitHub ↗
          </a>
        </div>

      </article>

      {/* ==================================================
          PROJECT 2 — BANGLASER
      ================================================== */}
      <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-[#f8fafc] p-7 transition hover:-translate-y-1 hover:shadow-lg">

        <div className="mb-5 flex items-center justify-between">
          <span className="rounded-full bg-[#e8edff] px-3 py-1 text-xs font-semibold text-[#012169]">
            Speech AI
          </span>

          <span className="text-sm font-semibold text-slate-400">
            02
          </span>
        </div>

        <h3 className="text-xl font-bold leading-7 text-slate-900">
          BanglaSER – Speech Emotion Recognition
        </h3>

        <p className="mt-3 flex-grow leading-7 text-slate-600">
          Hybrid MFCC, log-mel, chroma, and cochleagram features with
          CNN-Transformer and CNN-GRU models for Bangla emotion recognition.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-600">
            Speech
          </span>

          <span className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-600">
            CNN-GRU
          </span>

          <span className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-600">
            Transformer
          </span>
        </div>

        <div className="mt-6">
          <a
            href="https://github.com/TasnubaTiha33/BanglaSER-FeatureFusion"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#012169] transition hover:underline"
          >
            View on GitHub ↗
          </a>
        </div>

      </article>

      {/* ==================================================
          PROJECT 3 — EHRMGAN
      ================================================== */}
      <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-[#f8fafc] p-7 transition hover:-translate-y-1 hover:shadow-lg">

        <div className="mb-5 flex items-center justify-between">
          <span className="rounded-full bg-[#e8edff] px-3 py-1 text-xs font-semibold text-[#012169]">
            Healthcare AI
          </span>

          <span className="text-sm font-semibold text-slate-400">
            03
          </span>
        </div>

        <h3 className="text-xl font-bold leading-7 text-slate-900">
          ehrMGAN for Synthetic EHR Generation
        </h3>

        <p className="mt-3 flex-grow leading-7 text-slate-600">
          Adapted ehrMGAN for pediatric sepsis and built structured
          patient-hour-level clinical data pipelines for synthetic EHR
          generation.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-600">
            EHR
          </span>

          <span className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-600">
            GANs
          </span>

          <span className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-600">
            Clinical AI
          </span>
        </div>

        <div className="mt-6">
          <a
            href="https://github.com/TasnubaTiha33/ehrMGAN_Sepsis_DUKE"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#012169] transition hover:underline"
          >
            View on GitHub ↗
          </a>
        </div>

      </article>

      {/* ==================================================
          PROJECT 4 — TESLA
      ================================================== */}
      <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-[#f8fafc] p-7 transition hover:-translate-y-1 hover:shadow-lg">

        <div className="mb-5 flex items-center justify-between">
          <span className="rounded-full bg-[#e8edff] px-3 py-1 text-xs font-semibold text-[#012169]">
            Time Series
          </span>

          <span className="text-sm font-semibold text-slate-400">
            04
          </span>
        </div>

        <h3 className="text-xl font-bold leading-7 text-slate-900">
          Tesla Stock Forecasting
        </h3>

        <p className="mt-3 flex-grow leading-7 text-slate-600">
          Time-series forecasting using LSTM and GRU models for stock movement
          prediction and temporal pattern analysis.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-600">
            LSTM
          </span>

          <span className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-600">
            GRU
          </span>

          <span className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-600">
            Forecasting
          </span>
        </div>

        <div className="mt-6">
          <a
            href="https://github.com/TasnubaTiha33/Tesla-S"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#012169] transition hover:underline"
          >
            View on GitHub ↗
          </a>
        </div>

      </article>

      {/* ==================================================
          PROJECT 5 — STUDENT PERFORMANCE
      ================================================== */}
      <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-[#f8fafc] p-7 transition hover:-translate-y-1 hover:shadow-lg">

        <div className="mb-5 flex items-center justify-between">
          <span className="rounded-full bg-[#e8edff] px-3 py-1 text-xs font-semibold text-[#012169]">
            Machine Learning
          </span>

          <span className="text-sm font-semibold text-slate-400">
            05
          </span>
        </div>

        <h3 className="text-xl font-bold leading-7 text-slate-900">
          Student Performance Prediction
        </h3>

        <p className="mt-3 flex-grow leading-7 text-slate-600">
          Machine learning models to identify students at risk and analyze
          academic and socioeconomic factors associated with student
          performance.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-600">
            Classification
          </span>

          <span className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-600">
            Random Forest
          </span>

          <span className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-600">
            SVM
          </span>
        </div>

        <div className="mt-6">
          <a
            href="https://github.com/TasnubaTiha33/Predicting-Student-Success-and-Failure"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#012169] transition hover:underline"
          >
            View on GitHub ↗
          </a>
        </div>

      </article>

      {/* ==================================================
          PROJECT 6 — BOOKVAULT
      ================================================== */}
      <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-[#f8fafc] p-7 transition hover:-translate-y-1 hover:shadow-lg">

        <div className="mb-5 flex items-center justify-between">
          <span className="rounded-full bg-[#e8edff] px-3 py-1 text-xs font-semibold text-[#012169]">
            Software Engineering
          </span>

          <span className="text-sm font-semibold text-slate-400">
            06
          </span>
        </div>

        <h3 className="text-xl font-bold leading-7 text-slate-900">
          BookVault – Web Application
        </h3>

        <p className="mt-3 flex-grow leading-7 text-slate-600">
          Full-stack book-sharing platform developed using Flask, SQLAlchemy,
          and an MVC-based software architecture.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-600">
            Flask
          </span>

          <span className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-600">
            SQLAlchemy
          </span>

          <span className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-600">
            MVC
          </span>
        </div>

        <div className="mt-6">
          <a
            href="https://github.com/TasnubaTiha33/BookVault_CSE327"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#012169] transition hover:underline"
          >
            View on GitHub ↗
          </a>
        </div>

      </article>

    </div>

    {/* VIEW ALL PROJECTS */}
    <div className="mt-10">
      <a
        href="https://github.com/TasnubaTiha33"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-[#012169] transition hover:underline"
      >
        Explore all projects on GitHub →
      </a>
    </div>

  </div>
</section>

{/* ======================================================
    EXPERIENCE SECTION
====================================================== */}
<section
  id="experience"
  className="border-t border-slate-200 bg-[#f8fafc] py-24"
>
  <div className="mx-auto max-w-6xl px-6">

    {/* SECTION HEADER */}
    <div className="mb-14 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#3158a5]">
        Experience
      </p>

      <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        Research, Teaching & Industry
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        Experience across clinical AI research, university teaching, and
        software engineering.
      </p>
    </div>

    {/* ======================================================
        TIMELINE
    ====================================================== */}
    <div className="relative ml-3 border-l-2 border-[#d9e2ff]">

      {/* ==================================================
          1. GRADUATE RESEARCH ASSISTANT
      ================================================== */}
      <div className="relative pb-14 pl-10">
        <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-4 border-[#dbe4ff] bg-[#012169]" />

        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Graduate Research Assistant
              </h3>

              <p className="mt-1 font-semibold text-[#3158a5]">
                Duke University · Kamaleswaran Lab
              </p>
            </div>

            <span className="w-fit rounded-full bg-[#e8edff] px-3 py-1 text-sm font-semibold text-[#012169]">
              Aug 2026 – Present
            </span>
          </div>

          <ul className="mt-5 space-y-3 pl-5 text-slate-600">
            <li className="list-disc leading-7">
              Conducting research on AI for pediatric critical care under the
              supervision of Dr. Rishikesan Kamaleswaran.
            </li>

            <li className="list-disc leading-7">
              Developing representation learning and retrieval methods for
              electronic health records, physiological time series, and
              clinical data.
            </li>

            <li className="list-disc leading-7">
              Investigating large language models and retrieval-augmented
              generation for clinical reasoning and decision support.
            </li>

            <li className="list-disc leading-7">
              Developing robust, interpretable, and clinically meaningful AI
              methods for real-world healthcare applications.
            </li>
          </ul>

        </div>
      </div>

      {/* ==================================================
          2. GRADUATE TEACHING ASSISTANT
      ================================================== */}
      <div className="relative pb-14 pl-10">
        <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-4 border-[#dbe4ff] bg-[#012169]" />

        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Graduate Teaching Assistant
              </h3>

              <p className="mt-1 font-semibold text-[#3158a5]">
                North South University · Department of Electrical and Computer
                Engineering
              </p>
            </div>

            <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
              Feb 2026 – May 2026
            </span>
          </div>

          <ul className="mt-5 space-y-3 pl-5 text-slate-600">
            <li className="list-disc leading-7">
              Supported undergraduate engineering courses through instruction
              and academic guidance.
            </li>

            <li className="list-disc leading-7">
              Conducted office hours, assisted with coursework, and mentored
              students.
            </li>

            <li className="list-disc leading-7">
              Collaborated with faculty on grading, assessments, and course
              delivery.
            </li>
          </ul>

        </div>
      </div>

      {/* ==================================================
          3. RESEARCH INTERN
      ================================================== */}
      <div className="relative pb-14 pl-10">
        <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-4 border-[#dbe4ff] bg-[#012169]" />

        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Research Intern
              </h3>

              <p className="mt-1 font-semibold text-[#3158a5]">
                Duke University · Kamaleswaran Lab
              </p>
            </div>

            <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
              Jul 2025 – Jul 2026
            </span>
          </div>

          <ul className="mt-5 space-y-3 pl-5 text-slate-600">
            <li className="list-disc leading-7">
              Conducted research under the supervision of Dr. Rishikesan
              Kamaleswaran.
            </li>

            <li className="list-disc leading-7">
              Worked on structured electronic health record pipelines for
              pediatric critical care research.
            </li>

            <li className="list-disc leading-7">
              Developed ehrMGAN-based approaches for synthetic clinical data
              generation.
            </li>

            <li className="list-disc leading-7">
              Contributed to research on patient representations, clinical
              retrieval, and AI-assisted decision support.
            </li>
          </ul>

        </div>
      </div>

      {/* ==================================================
          4. UNDERGRADUATE TEACHING ASSISTANT
      ================================================== */}
      <div className="relative pb-14 pl-10">
        <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-4 border-[#dbe4ff] bg-[#012169]" />

        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Undergraduate Teaching Assistant
              </h3>

              <p className="mt-1 font-semibold text-[#3158a5]">
                North South University
              </p>
            </div>

            <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
              Jan 2024 – Aug 2025
            </span>
          </div>

          <ul className="mt-5 space-y-3 pl-5 text-slate-600">
            <li className="list-disc leading-7">
              Supported courses across engineering, mathematics, and related
              undergraduate subjects.
            </li>

            <li className="list-disc leading-7">
              Mentored hundreds of students across multiple semesters.
            </li>

            <li className="list-disc leading-7">
              Conducted office hours, tutorials, and exam preparation
              sessions.
            </li>

            <li className="list-disc leading-7">
              Assisted faculty with grading, proctoring, and academic support.
            </li>
          </ul>

        </div>
      </div>

      {/* ==================================================
          5. CLOUDLYIO
      ================================================== */}
      <div className="relative pl-10">
        <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-4 border-[#dbe4ff] bg-[#012169]" />

        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Software Engineering Intern
              </h3>

              <p className="mt-1 font-semibold text-[#3158a5]">
                CloudlyIO
              </p>
            </div>

            <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
              Apr 2025 – Jun 2025
            </span>
          </div>

          <ul className="mt-5 space-y-3 pl-5 text-slate-600">
            <li className="list-disc leading-7">
              Worked on backend development and machine learning-based
              automation pipelines.
            </li>

            <li className="list-disc leading-7">
              Built internal engineering tools and workflow optimization
              systems.
            </li>
          </ul>

        </div>
      </div>

    </div>
  </div>
</section>

{/* ======================================================
    CONTACT SECTION
====================================================== */}
<section
  id="contact"
  className="border-t border-slate-200 bg-white py-24"
>
  <div className="mx-auto max-w-6xl px-6">

    {/* SECTION HEADER */}
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#3158a5]">
        Contact
      </p>

      <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        Get in Touch
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        Feel free to reach out for collaborations, research discussions,
        or mentorship.
      </p>
    </div>

    {/* CONTACT CARDS */}
    <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">

      {/* PERSONAL EMAIL */}
      <a
        href="mailto:tasnubatiha12@gmail.com"
        className="group rounded-2xl border border-slate-200 bg-[#f8fafc] p-7 text-center transition hover:-translate-y-1 hover:border-[#b8c7f0] hover:shadow-lg"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8edff] text-[#012169]">
          <Mail size={22} />
        </div>

        <h3 className="mt-5 font-bold text-slate-900">
          Personal Email
        </h3>

        <p className="mt-2 break-all text-sm text-slate-600 transition group-hover:text-[#012169]">
          tasnubatiha12@gmail.com
        </p>
      </a>

      {/* DUKE EMAIL */}
      <a
        href="mailto:tasnuba.islam@duke.edu"
        className="group rounded-2xl border border-slate-200 bg-[#f8fafc] p-7 text-center transition hover:-translate-y-1 hover:border-[#b8c7f0] hover:shadow-lg"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8edff] text-[#012169]">
          <Mail size={22} />
        </div>

        <h3 className="mt-5 font-bold text-slate-900">
          Duke Email
        </h3>

        <p className="mt-2 break-all text-sm text-slate-600 transition group-hover:text-[#012169]">
          tasnuba.islam@duke.edu
        </p>
      </a>

      {/* LOCATION */}
      <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-7 text-center transition hover:-translate-y-1 hover:border-[#b8c7f0] hover:shadow-lg">

        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8edff] text-[#012169]">
          <MapPin size={22} />
        </div>

        <h3 className="mt-5 font-bold text-slate-900">
          Location
        </h3>

        <p className="mt-2 text-sm text-slate-600">
          Durham, NC, USA
        </p>
      </div>

    </div>

  </div>
</section>

{/* ======================================================
    FOOTER
====================================================== */}
<footer className="border-t border-slate-200 bg-[#012169]">
  <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-center md:flex-row md:text-left">

    <p className="text-sm text-blue-100">
      © 2026 Tasnuba Islam. All Rights Reserved.
    </p>

    <p className="text-sm text-blue-200">
      PhD Student · Duke University
    </p>

  </div>
</footer>
    </main>
  );
}

