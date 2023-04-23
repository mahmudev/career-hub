import React from "react";

const Blog = () => {
  return (
    <div className="bg-white">
      <div className="py-4 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-3xl text-center tracking-tight font-bold text-gray-900">
          Blog section
        </h2>
        <div className="grid pt-8 text-left md:gap-16  md:grid-cols-2">
          <div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                When should you use context API?
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Context API in React should be used when you have data or state
                that needs to be accessed by multiple components that are not
                necessarily directly connected in the component tree. It's
                especially useful for passing down props to deeply nested
                components without having to manually pass them through every
                level of the tree. However, it's important to note that
                overusing context can lead to performance issues and unnecessary
                complexity, so it's best to use it judiciously and only when
                needed.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                What is a custom hook?
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                A custom hook is a JavaScript function that allows you to reuse
                stateful logic across different components in React. It's a way
                to extract complex logic from your components and encapsulate it
                into a separate, reusable function that can be imported and used
                wherever needed. Custom hooks start with the word "use" and
                provide access to state, lifecycle methods, and other React
                features. By using custom hooks, you can write more modular and
                maintainable code while reducing duplication in your
                application.
              </p>
            </div>
          </div>
          <div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                What is useRef?
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                useRef is a hook in React that provides a way to store and
                manipulate mutable values that persist across renders without
                triggering a re-render of the component. useRef can be used to
                access DOM nodes, keep track of previous state or props, create
                timers and intervals, and other use cases where you need to
                store and update values that don't affect the rendering of your
                component. It's important to note that useRef should not be used
                as a replacement for state in most cases, but rather as a
                complement to it.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                What is useMemo?
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                useMemo is a hook in React that allows you to memoize expensive
                computations so that they are only recomputed when their
                dependencies change. It's useful for optimizing performance in
                components that rely on complex computations or expensive
                operations such as filtering or sorting large arrays. useMemo
                takes two arguments: the first is a function that returns the
                computed value, and the second is an array of dependencies that
                trigger a recompute if they change. By using useMemo, you can
                avoid unnecessary renders and improve the overall performance of
                your application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
