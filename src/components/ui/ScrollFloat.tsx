import React, { useEffect, useMemo, useRef, type CSSProperties, type ReactNode, type RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

const inheritedTextStyle: CSSProperties = {
  color: 'inherit'
};

const clippedTextStyle: CSSProperties = {
  ...inheritedTextStyle,
  background: 'inherit',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
};

const splitTextNode = (text: string, keyPrefix: string, usesClippedText = false) => (
  <span
    className={`inline-block ${usesClippedText ? 'text-transparent bg-clip-text' : ''}`}
    key={keyPrefix}
    style={usesClippedText ? clippedTextStyle : inheritedTextStyle}
  >
    {text.split('').map((char, index) => (
      <span
        className={`scroll-float-char inline-block ${usesClippedText ? 'text-transparent bg-clip-text' : ''}`}
        key={`${keyPrefix}-${index}`}
        style={usesClippedText ? clippedTextStyle : inheritedTextStyle}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))}
  </span>
);

const splitNode = (node: ReactNode, keyPrefix = 'scroll-float', usesClippedText = false): ReactNode => {
  if (typeof node === 'string') {
    return splitTextNode(node, keyPrefix, usesClippedText);
  }

  if (typeof node === 'number') {
    return splitTextNode(String(node), keyPrefix, usesClippedText);
  }

  if (Array.isArray(node)) {
    return node.map((child, index) => splitNode(child, `${keyPrefix}-${index}`, usesClippedText));
  }

  if (React.isValidElement<{ children?: ReactNode; className?: unknown }>(node)) {
    const children = node.props.children;
    const className = typeof node.props.className === 'string' ? node.props.className : '';
    const childUsesClippedText = usesClippedText || className.includes('bg-clip-text');

    return React.cloneElement(node, {
      children: splitNode(children, `${keyPrefix}-child`, childUsesClippedText)
    });
  }

  return node;
};

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.03
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => splitNode(children), [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;
    const charElements = el.querySelectorAll('.scroll-float-char');

    const animation = gsap.fromTo(
      charElements,
      {
        willChange: 'opacity, transform',
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: '50% 0%'
      },
      {
        duration: animationDuration,
        ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true
        }
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <h1 ref={containerRef} className={`overflow-hidden ${containerClassName}`}>
      {splitText}
    </h1>
  );
};

export default ScrollFloat;
