module.exports = {

    plugins: [ '@stylistic' ],

    /*  The commented-out rules are intentionally NOT set by this configuration */
    rules: {

    /// '@stylistic/array-bracket-newline'
        '@stylistic/array-bracket-spacing':             [ 'error',
            'always', {
                arraysInArrays:     false,
                objectsInArrays:    false,
        }],
    /// '@stylistic/array-element-newline'
        '@stylistic/arrow-parens':                      [ 'warning',
            'as-needed',
        ],
        '@stylistic/arrow-spacing':                     [ 'error' ],
        '@stylistic/block-spacing':                     [ 'error' ],
    /// '@stylistic/brace-style'
    /// '@stylistic/comma-dangle'
    /// '@stylistic/comma-spacing'
    /// '@stylistic/comma-style'
        '@stylistic/computed-property-spacing':         [ 'off' ],
        '@stylistic/dot-location':                      [ 'error',
            'property',
        ],
    /// '@stylistic/eol-last'
        '@stylistic/function-call-argument-newline':    [ 'off' ],
        '@stylistic/function-call-spacing':             [ 'error',
            'never',
        ],
        '@stylistic/function-paren-newline':            [ 'off' ],
        '@stylistic/generator-star-spacing':            [ 'error', {
            before:                 false,
            after:                  true,
        }],
        '@stylistic/implicit-arrow-linebreak':          [ 'off' ],
    /// '@stylistic/indent'
    /// '@stylistic/indent-binary-ops'
    /// '@stylistic/jsx-child-element-spacing'
        '@stylistic/jsx/jsx-closing-bracket-location':  [ 'error',
            'line-aligned',
        ],
        '@stylistic/jsx-closing-tag-location':          [ 'off' ],
        '@stylistic/jsx/jsx-curly-brace-presence':      [ 'error', {
            children:               'never',
            propElementValues:      'ignore',
            props:                  'never',
        }],
        '@stylistic/jsx-curly-newline':                 [ 'off' ],
        '@stylistic/jsx/jsx-curly-spacing':             [ 'error', {
            when:                   'always',
        }],
        '@stylistic/jsx/jsx-equals-spacing':            [ 'error',
            'never',
        ],
        '@stylistic/jsx/jsx-first-prop-new-line':       [ 'off' ],
        '@stylistic/jsx-function-call-newline':         [ 'off' ],
    /// '@stylistic/jsx/jsx-indent'
    /// '@stylistic/jsx/jsx-indent-props'
        '@stylistic/jsx/jsx-max-props-per-line':        [ 'error',
            3,
        ],
    /// '@stylistic/jsx/jsx-newline'
        '@stylistic/jsx-one-expression-per-line':       [ 'off' ],
    /// '@stylistic/jsx/jsx-pascal-case'
        '@stylistic/jsx-props-no-multi-spaces':         [ 'error' ],
    /// '@stylistic/jsx-quotes'
        '@stylistic/jsx/jsx-self-closing-comp':         [ 'error' ],
        '@stylistic/jsx/jsx-sort-props':                [ 'error', {
            callbacksLast:          false,
            ignoreCase:             true,
            multiline:              'ignore',
            noSortAlphabetically:   false,
            shorthandFirst:         false,
            shorthandLast:          false,
        }],
        '@stylistic/jsx-tag-spacing':                   [ 'error' ],
        '@stylistic/jsx-wrap-multilines':               [ 'error', {
            arrow:                  'ignore',
            assignment:             'ignore',
            condition:              'ignore',
            declaration:            'ignore',
            logical:                'ignore',
            prop:                   'ignore',
            propertyValue:          'ignore',
            return:                 'parens-new-line',
        }],
        '@stylistic/key-spacing':                       [ 'error', {
            multiLine: {
                afterColon:          true,
                align:               'value',
                beforeColon:         false,
                mode:                'minimum',
            },
            singleLine: {
                afterColon:          true,
                beforeColon:         false,
                mode:                'strict',
            },
        }],
        '@stylistic/keyword-spacing':                   [ 'error', {
            after:                  false,
            before:                 true,
        }],
    /// '@stylistic/line-comment-position'
    /// '@stylistic/linebreak-style'
    /// '@stylistic/lines-around-comment'
    /// '@stylistic/ts/lines-around-comment'
        '@stylistic/lines-between-class-members':       [ 'error', {
            enforce: [{
                blankLine:          'always',
                next:               'method',
                prev:               '*',
            }],
        }],
        '@stylistic/max-len':                           [ 'off' ],
        '@stylistic/max-statements-per-line':           [ 'error' ],
    /// '@stylistic/ts/member-delimiter-style'
    /// '@stylistic/multiline-comment-style'
        '@stylistic/multiline-ternary':                 [ 'error',
            'always-multiline',
        ],
        '@stylistic/new-parens':                        [ 'error',
            'never',
        ],
        '@stylistic/newline-per-chained-call':          [ 'error', {
            ignoreChainWithDepth:   3,
        }],
    /// @stylistic/no-confusing-arrow
        '@stylistic/no-extra-parens':                   [ 'error',
            'all',
        ],
        '@stylistic/no-extra-semi':                     [ 'error' ],
        '@stylistic/no-floating-decimal':               [ 'error' ],
    /// '@stylistic/no-mixed-operators'
        '@stylistic/no-mixed-spaces-and-tabs':          [ 'error' ],
        '@stylistic/no-multi-spaces':                   [ 'off' ],
        '@stylistic/no-multiple-empty-lines':           [ 'error', {
            max:                    2,
        }],
    /// '@stylistic/no-tabs'
        '@stylistic/no-trailing-spaces':                [ 'error' ],
        '@stylistic/no-whitespace-before-property':     [ 'off' ],
    /// '@stylistic/nonblock-statement-body-position'
        '@stylistic/object-curly-newline':              [ 'off' ],
        '@stylistic/object-curly-spacing':              [ 'error',
            'always',
        ],
        '@stylistic/object-property-newline':           [ 'off' ],
        '@stylistic/one-var-declaration-per-line':      [ 'error',
            'always',
        ],
        '@stylistic/operator-linebreak':                [ 'error',
            'before',
        ],
        '@stylistic/padded-blocks':                     [ 'off' ],
    /// '@stylistic/padding-line-between-statements'    //  TODO: needs experimentation
        '@stylistic/quote-props':                       [ 'error',
            'as-needed', {
                numbers:            false,
                unnecessary:        false,
            },
        ],
    /// '@stylistic/quotes'
        '@stylistic/rest-spread-spacing':               [ 'error',
            'never',
        ],
    /// '@stylistic/semi'
    /// '@stylistic/ts/member-delimiter-style'
        '@stylistic/semi-spacing':                      [ 'off' ],
        '@stylistic/semi-style':                        [ 'error',
            'last',
        ],
        '@stylistic/space-before-blocks':               [ 'error',
            'never',
        ],
        '@stylistic/space-before-function-paren':       [ 'error',
            'never',
        ],
        '@stylistic/space-in-parens':                   [ 'error',
            'always', {
                exceptions:         [ '{}', '[]', '()' ],
            },
        ],
        '@stylistic/space-infix-ops':                   [ 'error' ],
        '@stylistic/space-unary-ops':                   [ 'error', {
            nonwords:               false,
            words:                  true,
        }],
        '@stylistic/spaced-comment':                    [ 'error',
            'always',
        ],
        '@stylistic/switch-colon-spacing':              [ 'error', {
            after:                  true,
            before:                 false,
        }],
        '@stylistic/template-curly-spacing':            [ 'error',
            'always',
        ],
        '@stylistic/template-tag-spacing':              [ 'error',
            'always',
        ],
        '@stylistic/ts/type-annotation-spacing':        [ 'error', {
            after:                  true,
            before:                 false,
            overrides: {
                arrow: {
                    after:          true,
                    before:         true,
                },
            },
        }],
        '@stylistic/type-generic-spacing':              [ 'error' ],
        '@stylistic/type-named-tuple-spacing':          [ 'error' ],
    /// '@stylistic/wrap-iife'
    /// '@stylistic/wrap-regex'
        '@stylistic/yield-star-spacing':                [ 'error',
            'after',
        ],
    },
};
