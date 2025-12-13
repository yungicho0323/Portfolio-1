import React from 'react';
import { useState } from "react";
import Header from "../global/Header.jsx";
import Footer from "../global/Footer.jsx";
import './Zynergy.css';
import heroImage from '../assets/images/iphone-16-mockup.png';
import introVideo from "../assets/videos/Buddyup_final.mp4";
import researchImage from '../assets/images/Research_Sources.png';
import process1Video from "../assets/videos/Process1.mp4";
import process2Video from "../assets/videos/Process2.mp4";
import process3Video from "../assets/videos/Process3.mp4";
import process4Video from "../assets/videos/Process4.mp4";
import feedStyleMockup from "../assets/images/feedstyle_mockup.png";
import liveChatMockup from "../assets/images/livechat_mockup.png";
import customChallengeImg from "../assets/images/custom-challenge-left.png";
import aiVerificationImg from "../assets/images/ai-verification-left.png";
import customChallengeVideo from "../assets/videos/custom-challenge.mp4";
import aiVerificationVideo from "../assets/videos/ai-verification.mp4";
import homeV1Mockup from "../assets/images/home-v1.png";
import homeV2Mockup from "../assets/images/home-v2.png";




function Zynergy() {

    return(
        <>
        <Header />
        <main div className="Project-detail-container">
            {/*Project-hero*/}
            <section className="project-hero-updated">
              <div className="top-layout">
              <div className="Zynergy-project-text">
                <h1>BuddyUp+</h1>

                <p> 
                  <strong>
                A social wellness app that helps people build healthy habits by staying accountable with friends through shared challenges, AI-verified progress, and fun rewards</strong> 
                </p>
  

          <div className="prototype-button-wrapper">
          <a
            href="https://www.figma.com/proto/vwi8qExln9liGrl8ugRvFx/BuddyUp--app-redesign?node-id=1192-17293&p=f&t=A07tDyaaTahOVvnb-1&scaling=scale-down&content-scaling=fixed&page-id=810%3A2184&starting-point-node-id=1192%3A16069&show-proto-sidebar=1"
            target="_blank"
            rel="BuddyUp+ App prototyping"
            className="prototype-button"
          >
          View Prototype
          </a>
        </div>
        </div>

              </div>
              <div className="Zynergy-project-image">
                <img src={heroImage} alt="Zynergy Project Preview" />
              </div>
          

                <div className="project-meta zynergy-updated-meta">
                  <div>
                    <h4>Timeline</h4>
                    <p>4 weeks, Nov 2025
                    </p>
                  </div>
                  <div>
                    <h4>Role</h4>
                    <p>Lead UX/UI Designer</p>
                  </div>
                  <div>
                    <h4>Responsibilities</h4>
                    <p>Research <br/>Concept Development <br/> UX/UI Design <br/> Interaction Design <br/>Prototyping <br/> User Testing</p>
                  </div>
                  <div>
                    <h4>Tools</h4>
                    <p> Figma, Figma Make <br/> After Effects</p>

                  </div>
                  <div>
                    <h4>Team</h4>
                    <p>2 UX/UI Designers</p>
                  </div>
                </div>
            </section>


     {/* Overview */}
<section className="buddyupplus-overview-section">
  <div className="buddyupplus-overview-container">
    <div className="buddyupplus-overview-header">
      <span className="buddyupplus-overview-dot" />
      <span className="buddyupplus-overview-label">
        Overview (WHY & HOW I Started This App)
      </span>
    </div>

    <div className="buddyupplus-overview">
      <p>
        When it comes to building habits, most people don’t struggle with starting —
        they struggle with staying consistent. <br/>
        Motivation fades, life gets busy, and traditional trackers become
        another forgotten app on the phone.
      </p>

      <p>
        BuddyUp+ was born from a simple observation: <br />
        <strong>People stay committed when they don’t feel alone.</strong>
      </p>

      <p>
        This project explores how social accountability and shared challenges can
        transform habit-building into something supportive, fun, and sustainable.
        Instead of tracking in isolation, users can inspire, verify, and celebrate
        each other.
      </p>

      <p>
        During testing, users shared that the experience made them feel “motivated
        because someone is doing it with me” and “more confident to finish the week.”
        Their feedback helped refine BuddyUp+ into a system that supports both
        consistency and community.
      </p>
    </div>
  </div>
</section>

{/* Intro Video Section */}
<section className="buddyupplus-intro">
  <div className="buddyupplus-intro-inner">
    <div className="buddyupplus-intro-text">
      <p className="buddyupplus-intro-label">Intro Video</p>

      <div className="buddyupplus-intro-title-row">
        <span className="buddyupplus-intro-dot" />
        <p className="buddyupplus-intro-title">
          To explain how this app works
        </p>
      </div>

      <p className="buddyupplus-intro-desc">
        Habit change happens not through pressure, but through visibility,
        community, and shared commitment.
      </p>
    </div>

    <div className="buddyupplus-intro-video-wrapper">
      <video
        className="buddyupplus-intro-video"
        src={introVideo}
        controls
      >
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</section>


{/* Problem & Mission */}
{/* Problem & Mission Section */}
<section className="buddyupplus-problem">
  <div className="buddyupplus-problem-inner">
    {/* Section heading */}
    <div className="buddyupplus-problem-heading">
      <span className="buddyupplus-problem-dot" />
      <h3 className="buddyupplus-problem-title">Problem &amp; Mission</h3>
    </div>

    {/* Card */}
    <div className="buddyupplus-problem-card">
      {/* Research image */}
      <div className="buddyupplus-problem-image-wrapper">
        <img
          src={researchImage}
          alt="Research sources about habit formation and consistency"
          className="buddyupplus-problem-image"
        />
      </div>

      {/* Two columns */}
      <div className="buddyupplus-problem-columns">
        {/* Problem column */}
        <div className="buddyupplus-problem-column">
          <div className="buddyupplus-problem-column-heading">
            <span className="buddyupplus-problem-dot-small" />
            <p className="buddyupplus-problem-column-label">The Problem</p>
          </div>

          <p className="buddyupplus-problem-text">
            Users often fail to maintain{" "}
           daily habits due
            to low motivation, limited accountability, and boring
            self-tracking experiences.
          </p>

          <p className="buddyupplus-problem-text">
            Without a fun and social way to commit to challenges, progress
            drops off quickly.
          </p>
        </div>

        {/* Mission column */}
        <div className="buddyupplus-problem-column">
          <div className="buddyupplus-problem-column-heading">
            <span className="buddyupplus-problem-dot-small" />
            <p className="buddyupplus-problem-column-label">The Mission</p>
          </div>

          <p className="buddyupplus-problem-text buddyupplus-problem-text--bold">
            How can we help people stay consistent by turning habit tracking
            into a social and engaging experience?
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Key Design Decisions Section */}
<section className="buddyupplus-key">
<div className="buddyupplus-key-inner">
<div className="buddyupplus-key-heading">
  <span className="buddyupplus-key-dot" />
  <h3 className="buddyupplus-keydesign-title">Key Design Decisions</h3>
</div>


    <div className="buddyupplus-key-list">
      {/* 1. Create Custom Challenges */}
      <div className="buddyupplus-key-item">
        <div className="buddyupplus-key-text">
          <p className="buddyupplus-key-eyebrow">
            1. Create Custom Challenges
          </p>
          <h4 className="buddyupplus-key-title">
            Habits become easier when they feel personal.
          </h4>
          <p className="buddyupplus-key-body">
            Users can design their own challenges by choosing the rules, friends, and reward type. <br/>
            This makes every goal more personal and
            helps it fit naturally into their lifestyle.
          </p>
        </div>

        <div className="buddyupplus-key-media">
          <div className="buddyupplus-key-phone">
            <video
              className="buddyupplus-key-video"
              src={process1Video}
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </div>

      {/* 2. Reward System */}
      <div className="buddyupplus-key-item buddyupplus-key-item--reverse">
        <div className="buddyupplus-key-media">
          <div className="buddyupplus-key-phone">
            <video
              className="buddyupplus-key-video"
              src={process2Video}
              autoPlay
              loop
              muted
            />
          </div>
        </div>

        <div className="buddyupplus-key-text">
          <p className="buddyupplus-key-eyebrow">2. Fun Reward System </p>
          <h4 className="buddyupplus-key-title">
            A real-world reward makes habits stick.
          </h4>
          <p className="buddyupplus-key-body">
          Users can choose no reward, pick a preset, or create a custom one.  
            <br /> Rewards add excitement and raise the stakes, making it more satisfying to complete a challenge.
          </p>
        </div>
      </div>

      {/* 3. Daily Proof + Smart Verification */}
      <div className="buddyupplus-key-item">
        <div className="buddyupplus-key-text">
          <p className="buddyupplus-key-eyebrow">
            3. Daily Proof + AI Verification
          </p>
          <h4 className="buddyupplus-key-title">
            A simple daily ritual that keeps everyone accountable.
          </h4>
          <p className="buddyupplus-key-body">
            Users submit a quick daily picture to prove their progress. <br/>
            AI verification helps keep things fair without adding friction,
            turning check-ins into a lightweight habit.
          </p>
        </div>

        <div className="buddyupplus-key-media">
          <div className="buddyupplus-key-phone">
            <video
              className="buddyupplus-key-video"
              src={process3Video}
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </div>

      {/* 4. Social Challenge Feed */}
      <div className="buddyupplus-key-item buddyupplus-key-item--reverse">
        <div className="buddyupplus-key-media">
          <div className="buddyupplus-key-phone">
            <video
              className="buddyupplus-key-video"
              src={process4Video}
              autoPlay
              loop
              muted
            />
          </div>
        </div>

        <div className="buddyupplus-key-text">
          <p className="buddyupplus-key-eyebrow">4. Social Challenge Feed</p>
          <h4 className="buddyupplus-key-title">
            Motivation grows when progress is shared.
          </h4>
          <p className="buddyupplus-key-body">
            Watching friends share proof, reactions, and small wins turns
            challenges into a social experience.<br /> Supportive feedback and
            visible progress help people stay engaged over time.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Impact Section */}
<section className="buddyupplus-impact">
  <div className="buddyupplus-impact-inner">
    {/* Heading – same style as Problem & Mission */}
    <div className="buddyupplus-problem-heading">
      <span className="buddyupplus-problem-dot" />
      <h3 className="buddyupplus-problem-title">Impact</h3>
    </div>

    {/* Card container */}
    <div className="buddyupplus-problem-card buddyupplus-impact-card">
      <div className="buddyupplus-impact-grid">
        {/* 1. Clearer Accountability */}
        <div className="buddyupplus-impact-item">
          <div className="buddyupplus-impact-icon">💗</div>
          <h4 className="buddyupplus-impact-title">
            Clearer Accountability
          </h4>
          <p className="buddyupplus-impact-text">
            Shared proof made users feel more responsible for completing
            their daily challenges.
          </p>
        </div>

        {/* 2. Stronger Trust in Progress */}
        <div className="buddyupplus-impact-item">
          <div className="buddyupplus-impact-icon">✨</div>
          <h4 className="buddyupplus-impact-title">
            Stronger Trust in Progress
          </h4>
          <p className="buddyupplus-impact-text">
            AI-verified photos increased confidence that progress was
            real and fair.
          </p>
        </div>

        {/* 3. Higher Social Motivation */}
        <div className="buddyupplus-impact-item">
          <div className="buddyupplus-impact-icon">💛</div>
          <h4 className="buddyupplus-impact-title">
            Higher Social Motivation
          </h4>
          <p className="buddyupplus-impact-text">
            Group challenges made habits feel more fun and emotionally
            motivating than solo tracking.
          </p>
        </div>

        {/* 4. Better Commitment Through Structure */}
        <div className="buddyupplus-impact-item">
          <div className="buddyupplus-impact-icon">⚪</div>
          <h4 className="buddyupplus-impact-title">
            Better Commitment Through Structure
          </h4>
          <p className="buddyupplus-impact-text">
            Time-based challenges with a clear finish line helped users
            stay focused and consistent.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Identifying the Problem Section */}
<section className="buddyupplus-details">
  <div className="buddyupplus-details-inner">
    {/* Top heading */}
    <h2 className="buddyupplus-details-kicker">
      LET’S DIVE INTO MORE DETAILS!
    </h2>

    {/* Subheading with purple dot */}
    <div className="buddyupplus-details-tag-row">
      <span className="buddyupplus-details-tag-dot" />
      <p className="buddyupplus-details-tag-text">Identifying The Problem</p>
    </div>

    {/* Main problem headline */}
    <h3 className="buddyupplus-details-main-title">
      It’s hard for people to stick with healthy habits – Motivation fades
      quickly when you’re doing it alone.
    </h3>

    {/* Supporting research text */}
    <div className="buddyupplus-details-body">
      <p>
        Research shows that many people stop following their wellness or exercise
        routines after just a few months (in 1 or 2 months). Once the initial
        excitement wears off, it becomes easy to forget goals, lose motivation,
        or feel discouraged, especially without support from others.
      </p>
      <p>
        During interviews, users shared the same struggles: staying consistent is
        difficult, self-tracking feels boring, and most people want a simple way
        to stay motivated with friends.
      </p>
    </div>

    <p className="buddyupplus-details-intro">
      To solve these challenges, we focused on three main goals:
    </p>

    {/* Three goals cards */}
    <div className="buddyupplus-details-goals-wrapper">
      <div className="buddyupplus-details-goal-card">
        <p className="buddyupplus-details-goal-title">
          Accountability With Friends
        </p>
        <p className="buddyupplus-details-goal-text">
          Help users stay on track by doing shared goals together and supporting
          each other along the way.
        </p>
      </div>

      <div className="buddyupplus-details-goal-card">
        <p className="buddyupplus-details-goal-title">Consistency</p>
        <p className="buddyupplus-details-goal-text">
          Make progress feel exciting with real-world rewards, shared proof, and
          friendly encouragement that keeps people engaged.
        </p>
      </div>

      <div className="buddyupplus-details-goal-card">
        <p className="buddyupplus-details-goal-title">Fair &amp; Trusted Process</p>
        <p className="buddyupplus-details-goal-text">
          Use AI to verify daily proof so challenges feel honest, motivating,
          and fair for everyone involved.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Uncovering the Gaps Section */}
<section className="buddyupplus-gaps">
  <div className="buddyupplus-gaps-inner">

    {/* Heading - Same as others */}
    <div className="buddyupplus-problem-heading">
      <span className="buddyupplus-problem-dot" />
      <h3 className="buddyupplus-problem-title">Uncovering The Gaps</h3>
    </div>

    <p className="buddyupplus-gaps-intro">
      Competitive analysis of popular habit apps revealed clear UX gaps where
      users lose momentum and where BuddyUp+ creates new value.
    </p>

    <div className="buddyupplus-gaps-grid">

      {/* GAP 1 */}
      <div className="buddyupplus-gap-card">
        <p className="buddyupplus-gap-title">No Time-Boxed Challenges</p>

        <div className="buddyupplus-gap-flow">
          <div className="buddyupplus-gap-side">
            <span className="buddyupplus-gap-label">UX Problem</span>
            <p>Endless streaks feel vague and never truly “complete.”</p>
          </div>

          <span className="buddyupplus-gap-arrow">→</span>

          <div className="buddyupplus-gap-side opportunity">
            <span className="buddyupplus-gap-label">UX Opportunity</span>
            <p>Introduce short challenges with a clear start and finish.</p>
          </div>
        </div>
      </div>

      {/* GAP 2 */}
      <div className="buddyupplus-gap-card">
        <p className="buddyupplus-gap-title">No Real-World Proof</p>

        <div className="buddyupplus-gap-flow">
          <div className="buddyupplus-gap-side">
            <span className="buddyupplus-gap-label">UX Problem</span>
            <p>Self-reporting is easy to skip or fake.</p>
          </div>

          <span className="buddyupplus-gap-arrow">→</span>

          <div className="buddyupplus-gap-side opportunity">
            <span className="buddyupplus-gap-label">UX Opportunity</span>
            <p>Add AI + photo verification for trusted proof.</p>
          </div>
        </div>
      </div>

      {/* GAP 3 */}
      <div className="buddyupplus-gap-card">
        <p className="buddyupplus-gap-title">No Real-Life Rewards</p>

        <div className="buddyupplus-gap-flow">
          <div className="buddyupplus-gap-side">
            <span className="buddyupplus-gap-label">UX Problem</span>
            <p>Badges alone don’t motivate long-term behavior.</p>
          </div>

          <span className="buddyupplus-gap-arrow">→</span>

          <div className="buddyupplus-gap-side opportunity">
            <span className="buddyupplus-gap-label">UX Opportunity</span>
            <p>Enable real-world rewards users actually care about.</p>
          </div>
        </div>
      </div>

      {/* GAP 4 */}
      <div className="buddyupplus-gap-card">
        <p className="buddyupplus-gap-title">Weak Social Layer</p>

        <div className="buddyupplus-gap-flow">
          <div className="buddyupplus-gap-side">
            <span className="buddyupplus-gap-label">UX Problem</span>
            <p>Solo tracking causes motivation to drop quickly.</p>
          </div>

          <span className="buddyupplus-gap-arrow">→</span>

          <div className="buddyupplus-gap-side opportunity">
            <span className="buddyupplus-gap-label">UX Opportunity</span>
            <p>Design small group challenges with shared visibility.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* A/B Testing Section */}
<section className="buddyupplus-abtest">
  <div className="buddyupplus-abtest-inner">
    {/* Heading */}
    <div className="buddyupplus-abtest-title-row">
      <span className="buddyupplus-abtest-dot" />
      <h3 className="buddyupplus-abtest-title">A/B Testing</h3>
    </div>

    <p className="buddyupplus-abtest-desc">
      We explored which social interaction model better supports <strong>long-term engagement</strong> in
      group challenges. <br />
      This experiment helped us understand how different interaction patterns influence
      <strong> motivation</strong>, <strong>clarity of progress</strong>, and <strong>sustained participation</strong> over time.
    </p>

    {/* Concepts we tested */}
    <div className="buddyupplus-abtest-concepts">
      <p className="buddyupplus-abtest-concepts-heading">The Concepts We Tested</p>

      <div className="buddyupplus-abtest-pill">
        <span className="buddyupplus-abtest-pill-icon">🏷️</span>
        <p className="buddyupplus-abtest-pill-text">
          Which model helps users feel more supported and encouraged throughout the challenge.
        </p>
      </div>

      <div className="buddyupplus-abtest-pill">
        <span className="buddyupplus-abtest-pill-icon">🏷️</span>
        <p className="buddyupplus-abtest-pill-text">
          Which model clearly shows both team progress and individual progress at the same time.
        </p>
      </div>

      <div className="buddyupplus-abtest-pill">
        <span className="buddyupplus-abtest-pill-icon">🏷️</span>
        <p className="buddyupplus-abtest-pill-text">
          Which model better supports long-term engagement, not just short-term participation.
        </p>
      </div>
    </div>

    <p className="buddyupplus-abtest-findings-label">
      Finding: Feed Style vs Live Chat
    </p>

    <div className="buddyupplus-abtest-main">
      {/* Left side: findings + quote + takeaway */}
      <div className="buddyupplus-abtest-left">
        <div className="buddyupplus-abtest-stat-card">
          <div className="buddyupplus-abtest-stat-icon">📋</div>
          <p className="buddyupplus-abtest-stat-text">
            <strong>85% (5 out of 6) users chose “Feed Style”.</strong>
          </p>
        </div>

        <div className="buddyupplus-abtest-quote-card">
          <div className="buddyupplus-abtest-quote-mark">“</div>
          <p className="buddyupplus-abtest-quote-text">
            Feed Style makes it easy to quickly see everyone’s progress at a glance. It feels less
            overwhelming, more organized, and requires less effort to keep up.
          </p>
        </div>
      </div>

      {/* Right side: mockups */}
      <div className="buddyupplus-abtest-right">
        {/* Feed Style — chosen */}
        <div className="buddyupplus-abtest-mockup chosen">
          <div className="buddyupplus-abtest-badge">✔ Chosen</div>
          <img
            src={feedStyleMockup}
            alt="Feed Style screen mockup"
            className="buddyupplus-abtest-image"
          />
          <p className="buddyupplus-abtest-mockup-label">Feed Style</p>
        </div>

        <div className="buddyupplus-abtest-mockup">
          <img
            src={liveChatMockup}
            alt="Live Chat screen mockup"
            className="buddyupplus-abtest-image"
          />
          <p className="buddyupplus-abtest-mockup-label">Live Chat</p>
        </div>
      </div>
    </div>
  </div>
</section>


{/*solution */}

 <section id="solution" className="buddyupplus-solution">
      <div className="buddyupplus-solution-inner">
        <div className="buddyupplus-solution-header">
          <span className="buddyupplus-section-dot" />
          <p className="buddyupplus-section-label">Solution</p>
        </div>

        {/* Title */}
        <h2 className="buddyupplus-solution-title">
          Introducing BuddyUp+
        </h2>

        {/* ───────────────── ROW 1 ───────────────── */}
          <div className="buddyupplus-solution-row">
        {/* LEFT: TEXT */}
        <div className="buddyupplus-solution-text">
          <p className="buddyupplus-solution-eyebrow">
            CUSTOM YOUR THEMED CHALLENGE
          </p>
          <p className="buddyupplus-solution-body">
            Progress bar makes it easy for users to understand the flow of creating a
            challenge from choosing the challenge theme, inviting friends to join, and
            customizing real-world reward types.
          </p>
        </div>

        {/* RIGHT: PNG + VIDEO, SAME SIZE */}
        <div className="buddyupplus-solution-media buddyupplus-solution-media--pair">
          <div className="buddyupplus-phone-frame">
            <img
              src={customChallengeImg}
              alt="Custom challenge screens"
              className="buddyupplus-phone-content"
            />
          </div>

          <div className="buddyupplus-phone-frame">
            <video
              src={customChallengeVideo}
              autoPlay
              loop
              muted
              playsInline
              className="buddyupplus-phone-content"
            />
          </div>
        </div>
      </div>



        {/* ───────────────── ROW 2 ───────────────── */}
        <div className="buddyupplus-solution-row">
          <div className="buddyupplus-solution-text">
            <p className="buddyupplus-solution-eyebrow">
              Verify Progress with AI Verification
            </p>
            <p className="buddyupplus-solution-body">
            Photo submissions are instantly verified by AI, eliminating manual review and keeping accountability seamless.
            </p>
          </div>

          {/* PNG + VIDEO pair */}
          <div className="buddyupplus-solution-media buddyupplus-solution-media--pair">
            <img
              src={aiVerificationImg}
              alt="AI verification flow screens"
              className="buddyupplus-solution-image"
            />
            <video
              className="buddyupplus-solution-video"
              src={aiVerificationVideo}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

        {/* ───────────────── ROW 3 ───────────────── */}
        <div className="buddyupplus-solution-row">
          <div className="buddyupplus-solution-text">
            <p className="buddyupplus-solution-eyebrow">
              HOME PAGE ITERATION AFTER USER TESTING
            </p>

            <p className="buddyupplus-solution-body">
              <span className="buddyupplus-solution-inline-label">BEFORE:</span>{" "}
              Unclear what to do first for users.
            </p>
            <p className="buddyupplus-solution-body">
              <span className="buddyupplus-solution-inline-label">AFTER:</span>{" "}
              By displaying the <strong>“Start a new challenge”</strong> CTA
              button more prominently, it clarifies the flow and encourages
              users to launch the next challenge with friends as soon as they
              land on the home page.
            </p>
          </div>

          {/* home v1 → arrow → home v2 */}
          <div className="buddyupplus-solution-media buddyupplus-solution-media--comparison">
            <img
              src={homeV1Mockup}
              alt="BuddyUp+ homepage v1"
              className="buddyupplus-solution-image"
            />
            <span className="buddyupplus-solution-arrow">→</span>
            <img
              src={homeV2Mockup}
              alt="BuddyUp+ homepage v2 after iteration"
              className="buddyupplus-solution-image"
            />
          </div>
        </div>
      </div>
    </section>


{/* Reflection Section */}
<section id="reflection" className="buddyupplus-section buddyupplus-reflection">
  <div className="buddyupplus-section-header">
    <span className="buddyupplus-section-dot" />
    <h2 className="buddyupplus-section-title">Reflection</h2>
  </div>

  <div className="buddyupplus-reflection-block">
    <h3 className="buddyupplus-reflection-heading">What I Learned</h3>
    <p className="buddyupplus-reflection-highlight">
      This project strengthened my belief that meaningful habit change happens
      not through pressure, but through visibility, community, and shared
      commitment.
    </p>
    <p className="buddyupplus-reflection-body">
      Early user testing fundamentally shaped the direction of BuddyUp+. Instead
      of building based on assumptions, validating interaction models early
      helped us confidently prioritize the Feed system and design around real
      behavioral patterns, not hypothetical ones.
    </p>
  </div>

  <div className="buddyupplus-reflection-block">
    <h3 className="buddyupplus-reflection-heading">Future Improvements</h3>
    <p className="buddyupplus-reflection-body">
      Future iterations will explore automated proof through integrations with
      Apple Watch and health platforms, as well as sustainable monetization
      through wellness brand partnerships and sponsored rewards. This would
      strengthen both usability and business viability.
    </p>
  </div>
</section>





        </main>

        <Footer />
        </>

    );
}

export default Zynergy;
