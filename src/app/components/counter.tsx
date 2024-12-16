"use client";

import { useEffect } from "react";

const CounterSection: React.FC = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");

    const countUp = (counter: HTMLElement, target: number) => {
      let count = 0;
      const speed = 2000; // Total time for the counter to reach target (in milliseconds)
      const increment = Math.ceil(target / (speed / 100)); // Count up every 100ms

      const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }
        counter.innerHTML = `<span id="plus">+</span>${count}`; // Retain the plus sign
      }, 100); // Update every 100ms
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Ensure entry.target is an HTMLElement and not null
          const target =
            entry.target instanceof HTMLElement
              ? +entry.target.getAttribute("data-target")!
              : 0;
          countUp(entry.target as HTMLElement, target); // Call countUp for the current counter
          observer.unobserve(entry.target); // Stop observing once counted
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    counters.forEach((counter) => observer.observe(counter));

    return () => {
      counters.forEach((counter) => observer.unobserve(counter));
    };
  }, []);

  return (
    <div className="counter-container  bg-purple-600 py-10 flex justify-around flex-wrap gap-6">
      <div className="counter-section text-center">
        <div
          className="counter text-5xl font-bold text-white"
          data-target="150"
        >
          <span id="plus">+</span>0
        </div>
        <div className="label text-sm text-gray-200">HAPPY STUDENTS</div>
      </div>
      <div className="counter-section text-center">
        <div className="counter text-5xl font-bold text-white" data-target="50">
          <span id="plus">+</span>0
        </div>
        <div className="label text-sm text-gray-200">CERTIFIED COURSES</div>
      </div>
      <div className="counter-section text-center">
        <div
          className="counter text-5xl font-bold text-white"
          data-target="1000"
        >
          <span id="plus">+</span>0
        </div>
        <div className="label text-sm text-gray-200">AWARDS RECEIVED</div>
      </div>
    </div>
  );
};

export default CounterSection;
