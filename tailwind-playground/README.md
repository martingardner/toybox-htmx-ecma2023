### Tailwind

- looks like tailwind looks for an input.css even if you change the line to another file name it still expects an input.css and I can't find any other reference point
besides the package.json that calls on it.  So there must be something internal that requires that file name as well in order to generate an output.css

# Conclusion
- what's old is new again, tailwind is back to utility class abstracts to do things except it looks like this time around a builder is required whereas before it used to be you had the choice of either compiling or else downloading a pre-compiled version(not 100% sure on whether there is a precompiled tailwind and haven't seen it yet)
- will have the same benefits and flaws as the previous time around.  Memorizing the abstraction layer instead of the css, will save writing some css at the cost of the abstraction layer changing more often than the css underneath, plus having to memorize the syntax of the abstraction layer.