bplist00�_WebMainResource�	
_WebResourceFrameName^WebResourceURL_WebResourceData_WebResourceMIMEType_WebResourceTextEncodingNameP_Lhttps://raw.githubusercontent.com/mikek70/deck.js-blank/master/deck.blank.jsO�<html class="gr__raw_githubusercontent_com"><head><style id="style-1-cropbar-clipper">/* Copyright 2014 Evernote Corporation. All rights reserved. */
.en-markup-crop-options {
    top: 18px !important;
    left: 50% !important;
    margin-left: -100px !important;
    width: 200px !important;
    border: 2px rgba(255,255,255,.38) solid !important;
    border-radius: 4px !important;
}

.en-markup-crop-options div div:first-of-type {
    margin-left: 0px !important;
}
</style></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">/*!
Deck JS - deck.blank - v1.0
Copyright (c) 2012 Mike Kellenberger
*/

/*
This module adds the necessary methods and key bindings to blank/unblank the screen by pressing 'b'.
*/
(function($, deck, undefined) {
	var $d = $(document);

    $[deck]('extend', 'activateBlankScreen', function() {
        $[deck]('getSlide').hide();
    });
    
    $[deck]('extend', 'deactivateBlankScreen', function() {
        $[deck]('getSlide').show();
    });

	$[deck]('extend', 'blankScreen', function() {
        $[deck]('getSlide').is(":visible") ? $[deck]('activateBlankScreen') : $[deck]('deactivateBlankScreen');
    });

	$d.bind('deck.init', function() {
		// Bind key events
		$d.unbind('keydown.blank').bind('keydown.blank', function(e) {
			if (e.which==66) {
				$[deck]('blankScreen');
				e.preventDefault();
			}
		});
	});
})(jQuery, 'deck');</pre><div class="grammarly-disable-indicator"></div></body></html>Ztext/plainUUTF-8    ( ? N ` v � � ���                           �