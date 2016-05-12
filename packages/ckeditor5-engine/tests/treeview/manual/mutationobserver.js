/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/* global console:false */

'use strict';

import TreeView from '/ckeditor5/engine/treeview/treeview.js';
import MutationObserver from '/ckeditor5/engine/treeview/observer/mutationobserver.js';
import { setData } from '/tests/engine/_utils/view.js';

const treeView = new TreeView();
treeView.createRoot( document.getElementById( 'editor' ) );

treeView.on( 'mutations', ( evt, mutations ) => console.log( mutations ) );

treeView.addObserver( MutationObserver );

setData( treeView,
	'<container:p>foo</container:p>' +
	'<container:p>bar</container:p>' );

treeView.render();
