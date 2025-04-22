
## Observations

* `npm install` failed because the Node modules in "package-lock.json" are resolving to https://npm.parliament.uk, which isn't reachable from my machine. I had delete "package-lock.json" for `npm install` to work. This means my solution may use different dependency versions to those in the original exercise.

* The task didn't specifiy a Sass version so I used the default version installed by npm, which is Dart Sass.

* Despite following the typography spec, the text rendered in the component doesn't match the images in the design specification PDF. I beleive this may be caused by a discrepency in the font sizes used when generating the PDF screen grabs.


## Implementation notes

* If the member card component formed part of a component library I would favour utility classes over Sass @mixins to promote modularity and reduce duplication. For the purpose of this excercise I opted to keep things simple and apply styles directly to the relevant elements.

* Sass produces excessive media query statements when using mixins. These can be normalised using an additional webpack plugin, or by reworking the stylesheet at the expense of readability.

* For the TypeScript part, I couldn't find existing type defintions for the public API so created them for the member endpoint response. The structure was derrived from the response payload.
