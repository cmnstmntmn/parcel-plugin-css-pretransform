# Parcel Plugin - CSS pretransform

This patches Parcel's CSS Asset to transform with postcss earlier, before
parcel has parsed the import statements. This enables using postcss-imports
instead, and means subsequent postcss transforms apply to the whole bundle
instead of to each individually imported asset. All of this is to enable
postcss-custom-properties and postcss-custom-media to transform vars and
custom media across assets, like when using frameworks.

## Usage

Just add it to your dependencies, i.e.:

```
yarn add --dev parcel-plugin-css-pretransform
```

Parcel will automagically require it during processing.

If you have postcss-import installed already then you can confirm it works by
running `parcel build --detailed-report my.css` before and after:

```
# Before, parcel does the importing, and notices each imported asset
$ parcel build --detailed-report index.css
✨  Built in 1.50s.

dist/index.css                                          17.01 KB    1.43s
├── node_modules/normalize.css/normalize.css             1.76 KB    177ms
├── node_modules/basscss-margin/index.css                1.71 KB    345ms
├── node_modules/basscss-padding/index.css               1.33 KB    345ms
├── node_modules/basscss-flexbox/index.css               1.33 KB    344ms
├── node_modules/basscss-typography/index.css              990 B    343ms
├── node_modules/basscss-btn/index.css                     851 B    176ms
├── node_modules/basscss-border/index.css                  830 B    346ms
├── node_modules/basscss-background-colors/index.css       678 B    175ms
├── node_modules/basscss-layout/index.css                  624 B    343ms
├── node_modules/basscss-hide/index.css                    609 B    347ms
└── + 22 more assets

dist/index.map                                              88 B      4ms
✨  Done in 2.81s.

# Install it:
$ yarn add --dev parcel-plugin-css-pretransform
yarn add v1.13.0
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 1 new dependency.
info Direct dependencies
└─ parcel-plugin-css-pretransform@1.0.0
info All dependencies
└─ parcel-plugin-css-pretransform@1.0.0
✨  Done in 3.44s.

# After, postcss does the importing, and parcel is oblivious
$ parcel build --detailed-report index.css
✨  Built in 849ms.

dist/index.css    19.12 KB    792ms
dist/index.map        88 B      1ms
✨  Done in 1.36s.
```
