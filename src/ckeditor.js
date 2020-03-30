/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import AutoFormat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
  Essentials,
  Paragraph,
  Bold,
  Italic,
  Highlight,
  Clipboard,
  Code,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
  Table,
  TableToolbar,
  Link,
  List,
  Heading,
  BlockQuote,
  RemoveFormat,
  Alignment,
  Mention
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
      'heading',
      '|',
      'bold',
      'italic',
      'subscript',
      'superscript',
      'underline',
      'strikethrough',
      'alignment',
      '|',
      'link',
      'bulletedList',
      'numberedList',
      'blockQuote',
      'insertTable',
      'highlight',
      'code',
      'clipboard',
      'undo',
      'redo',
      'autoformat',
      'mention'
		]
	},
	table: {
		contentToolbar: [
      'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
