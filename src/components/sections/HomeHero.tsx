import React from 'react'
import InlineLink from '../ui/inlineLink'
import Hero from '../ui/Hero'

const HomeHero = () => {
  return (
    <div>
        <Hero
        children={
          <div className="flex flex-col gap-4">
            <h1>
              Hello,
              <br /> I&apos;m Wambui.
            </h1>
            <p>
              I&apos;m a web designer who is{" "}
              <InlineLink
                href="/about"
                link="passionate about creative expression and
              practical problem-solving."
              />{" "}
              I strive to create stunning and hard working websites that draws
              in customers, nurtures leads, and handles repetitive tasks
              automatically—all while you focus on what you do best.
            </p>
            <p>
              I help businesses turn their digital presence into a growth
              engine. By blending strategic{" "}
              <InlineLink href="/services" link="SEO" />, captivating{" "}
              <InlineLink href="/services" link="Web Design" />, and smart{" "}
              <InlineLink href="/services" link="Automation" />, I create
              websites that don&apos;t just look great—they work hard for your
              business.
            </p>
            <p>
              Sound like the what you've been searching for?{" "}
              <InlineLink href="/contact" link="Let's Chat!" />
            </p>
          </div>
        }
      />
    </div>
  )
}

export default HomeHero