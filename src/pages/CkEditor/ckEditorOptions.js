// import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
// import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export const options = {
    toolbar: {
        items: [
            'InsertECharts',
            '|',
            'exportWord',
            'exportPdf',
            '|',
            'undo',
            'redo',
            '|',
            'heading',
            'alignment',
            '|',
            'fontColor',
            'fontFamily',
            'fontSize',
            'fontBackgroundColor',
            'bold',
            'italic',
            'strikethrough',
            'underline',
            'highlight',
            'horizontalLine',
            '|',
            'bulletedList',
            'numberedList',
            'todoList',
            '|',
            'indent',
            'outdent',
            '|',
            'link',
            'imageUpload',
            'blockQuote',
            'insertTable',
            'mediaEmbed',
            'pageBreak',
            '|',
            'MathType',
            'ChemType',
            'specialCharacters',
            'superscript',
            'subscript',
            '|',
            'code',
            'codeBlock',
        ],
    },
    language: 'zh-cn',
    image: {
        toolbar: ['imageTextAlternative', 'imageStyle:full', 'imageStyle:side'],
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells',
            'tableCellProperties',
            'tableProperties',
        ],
    },
    licenseKey: '',
    // plugins:[InsertECharts],
};

// export class InsertECharts extends Plugin {
// 	init() {
// 		const editor = this.editor;
//         console.log(editor)
// 		editor.ui.componentFactory.add('InsertECharts', locale => {
// 			const view = new ButtonView(locale);

// 			let div = document.createElement('div');
// 			div.innerHTML = 'ECharts';

// 			view.set({
// 				label: 'Insert eCharts',
// 				// element: div,
// 				// icon: 'ECharts',
// 				tooltip: true
// 			});

// 			// Callback executed once the image is clicked.
// 			view.on('execute', () => {
// 				// const imageURL = prompt('Image URL');
// 				console.log('1111111111');
// 			});

// 			return view;
// 		});
// 	}
// }
