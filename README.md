Web development:

1.HTML
Anchor tag <a href=""></a>
Img <img src="" alt="">
Comment <!----> Shortcut: Ctrl + /
div --> block element
span -->inline element
<hr> a horizontal line , like a divider
<br> break to another line
<sup> and <sub> text above and below the baseline, eg. for exponents and chemical formulas
Navigation links <nav>
Sections <section>
Aside <aside> defines some content aside from the content it is placed in
Article <article></article> specifies independent, self-contained content
Header :introductory content
Main
Footer
Time
Tables:
    <tr> Table row
    <th> Headers which correspond to columns
    <td> Actual data cells
    The following are used to wrap the above into logical sections:
    <thead>
    <tbody>
    <tfoot>
Form:collection thats filled with inputs checkboxes buttons etc.
    Attributes:action-->where the data should be sent
                method--->which http method should be used eg. get and post

    Input types:text, password,email,checkbox, radio,color,reset,range etc

    Labels for accesibility:attribute for associates the label with the input that has the same id as the for, inline element

    Buttons:The default is submit
        Radio: to be only able to check one radio button make sure they all have the same name 
            the value is what it will be sent to the server
    Dropdown menu:select>option
    Textarea
    Validations:
        required input
        min, max, minlength, maxlength
        pattern:regex

2.CSS
<link rel="stylesheet" href="styles.css"> to link with html

Color:changes text color
background color
    Different color systems:
    1)by name
    2)rbg(0-255)
    3)hexadecimal(#000000-#FFFFFF)

Text properties:
text-align:center, left,right


text decoration: underline dotted red wavy; or none;

line height
letter spacing

font-size: used with px or relative units like em , rem

font-weight:control boldness or lightness of text eg normal, bold

font-family:Ariel, sans serif (the second is a fallback family)
