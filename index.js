module.exports = function() {
	const CSSAsset = require("parcel-bundler/src/assets/CSSAsset");

	if (CSSAsset.prototype.hasOwnProperty('transform') && !CSSAsset.prototype.hasOwnProperty('pretransform')) {
		CSSAsset.prototype.pretransform = CSSAsset.prototype.transform;
		delete CSSAsset.prototype.transform;
	}
}
