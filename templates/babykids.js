tinymce.init({
    selector: '#editor',
    height: 300,
    plugins: 'code',
    toolbar: 'code',
    content_style: `
        body, h1, h2, h3, h4, h5, h6, p, ul, ol {
            font-family: Arial, sans-serif;
            
        }
        p {
            font-size: 14px;
            line-height: 1.3;
            color: #000000;
            font-weight: 400;
            margin-block-end: calc(14px * 0.7);
        }
        h1 {
            font-size: 27px;
            line-height: 1.3;
            color: #000000;
            font-weight: bold;
            margin-block-end: calc(27px * 0.7);
        }
        h2 {
            font-size: 28px;
            line-height: 1.3;
            color: #000000;
            font-weight: bold;
            margin-block-end: calc(28px * 0.7);
        }
        h3 {
            font-size: 24px;
            line-height: 1.3;
            color: #000000;
            font-weight: bold;
            margin-block-end: calc(24px * 0.7);
        }
        h4 {
            font-size: 22px;
            line-height: 1.3;
            color: #000000;
            font-weight: bold;
            margin-block-end: calc(22px * 0.7);
        }
        h5 {
            font-size: 20px;
            line-height: 1.3;
            color: #000000;
            font-weight: bold;
            margin-block-end: calc(20px * 0.7);
        }
        h6 {
            font-size: 19px;
            line-height: 1.3;
            color: #000000;
            font-weight: bold;
            margin-block-end: calc(19px * 0.7);
        }
        ul, ol {
            color: #000000;
            font-weight: 400;
            font-family: Arial, sans-serif;
            line-height: 1.3;
            margin-block-end: calc(14px * 0.7);
        }
    `,
    formats: {
        p: { block: 'p', styles: { 'font-size': '14px', 'line-height': '1.3', 'color': '#000000', 'font-weight': '400', 'font-family': 'Arial, sans-serif', 'margin-block-end': 'calc(14px * 0.7)' } },
        h1: { block: 'h1', styles: { 'font-size': '27px', 'line-height': '1.3', 'color': '#000000', 'font-weight': 'bold', 'font-family': 'Arial, sans-serif', 'margin-block-end': 'calc(27px * 0.7)' } },
        h2: { block: 'h2', styles: { 'font-size': '28px', 'line-height': '1.3', 'color': '#000000', 'font-weight': 'bold', 'font-family': 'Arial, sans-serif', 'margin-block-end': 'calc(28px * 0.7)' } },
        h3: { block: 'h3', styles: { 'font-size': '24px', 'line-height': '1.3', 'color': '#000000', 'font-weight': 'bold', 'font-family': 'Arial, sans-serif', 'margin-block-end': 'calc(24px * 0.7)' } },
        h4: { block: 'h4', styles: { 'font-size': '22px', 'line-height': '1.3', 'color': '#000000', 'font-weight': 'bold', 'font-family': 'Arial, sans-serif', 'margin-block-end': 'calc(22px * 0.7)' } },
        h5: { block: 'h5', styles: { 'font-size': '20px', 'line-height': '1.3', 'color': '#000000', 'font-weight': 'bold', 'font-family': 'Arial, sans-serif', 'margin-block-end': 'calc(20px * 0.7)' } },
        h6: { block: 'h6', styles: { 'font-size': '19px', 'line-height': '1.3', 'color': '#000000', 'font-weight': 'bold', 'font-family': 'Arial, sans-serif', 'margin-block-end': 'calc(19px * 0.7)' } },
        ul: { block: 'ul', styles: { 'color': '#000000', 'font-weight': '400', 'font-family': 'Arial, sans-serif', 'line-height': '1.3', 'margin-block-end': 'calc(14px * 0.7)' } },
        ol: { block: 'ol', styles: { 'color': '#000000', 'font-weight': '400', 'font-family': 'Arial, sans-serif', 'line-height': '1.3', 'margin-block-end': 'calc(14px * 0.7)' } }
    },
    style_formats: [
        { title: 'Paragraph', format: 'p' },
        { title: 'Heading 1', format: 'h1' },
        { title: 'Heading 2', format: 'h2' },
        { title: 'Heading 3', format: 'h3' },
        { title: 'Heading 4', format: 'h4' },
        { title: 'Heading 5', format: 'h5' },
        { title: 'Heading 6', format: 'h6' },
        { title: 'Unordered List', format: 'ul' },
        { title: 'Ordered List', format: 'ol' }
    ],
    forced_root_block: 'p',
    forced_root_block_attrs: {
        style: 'font-size: 14px; line-height: 1.3; color: #000000; font-weight: 400; font-family: Arial, sans-serif; margin-block-end: calc(14px * 0.7);'
    },
    setup: function (editor) {
        editor.on('init', function () {
            editor.getDoc().body.style.fontFamily = 'Arial, sans-serif';
        });
    }
});