import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {

  React.useState(() => {
    // This is super janky but it gets the job done and we can guarantee the Twitter label is loaded
    let interval = setInterval(() => {
      let twitterButton = document.querySelector('[aria-label="Twitter"]');
      if(twitterButton) {
        twitterButton.innerHTML = 'Instagram';
      }

      let behanceButton = document.querySelector('[aria-label="Behance"]');
      if(behanceButton) {
        behanceButton.innerHTML = 'Join Club';
      }

      let mediumButton = document.querySelector('[aria-label="Medium"]');
      if(mediumButton) {
        mediumButton.innerHTML = 'Join Discord';
      }

      if(mediumButton && behanceButton & twitterButton) {
        clearInterval(interval);
      }

    }, 200)
  }, [])


  return (
    <>
      <Seo title="CMU Poker Club" />
      <Page>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About The Club" />
        <ProjectsSection sectionId="sponsors" heading="Sponsors" />
        <ContactSection sectionId="contact" heading="Contact" />
      </Page>
    </>
  );
}
