# PDS Frontend Developer Exercise

This repository contains my solution to the [PDS Frontend Developer Exercise](TASK.md). 

## Implementation Notes

* If this member card component formed part of a component library I would favour utility classes over Sass @mixins to promote modularity and reduce duplication. For the purpose of this exercise I opted to keep things simple and apply styles directly to the relevant elements.

* Sass produces excessive media query statements when using mixins. These can be normalised using an additional webpack plugin, or by reworking the stylesheet at the expense of readability.

* For the TypeScript part, I couldn't find existing type definitions for the public API so created them for the members endpoint. The structure was derived from the response payload.

* The method for populating a member card is included in `index.ts` and the markup is included in `index.html`. If the application was to grow in complexity, these would move into component specific TypeScript files along with additional methods to create and manage component instances. An example of this can be found in the [`dynamic-components`](https://github.com/keithclark/pds-exercise/tree/dynamic-components) branch ([See changes](https://github.com/keithclark/pds-exercise/compare/main...dynamic-components))

## Notes / Observations

* `npm install` failed because the Node modules in "package-lock.json" are resolving to https://npm.parliament.uk, which isn't reachable from my machine. I had delete "package-lock.json" for `npm install` to work. This means my solution may use different dependency versions to those in the original exercise.

* The task didn't specify a Sass version so I used the default version installed by npm, which is Dart Sass.

* Despite following the typography spec, the text rendered in the component doesn't exactly match the images in the design specification PDF. I believe this may be caused by a discrepancy in the font sizes used when generating the PDF screen grabs.
