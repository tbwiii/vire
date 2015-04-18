<cfsavecontent variable="cacheManifest">
CACHE MANIFEST
s
<!---
    NOTE: If ANY part of this file is different from the previous
    cache manifest, ALL of the files are re-downloaded.
--->
# Cache Manifest Version: 0.3.0

<!---
    Let's list the file that get cached. The URLs to these files
    are relative to the cache manifest file (or absolute).
--->
# Core files.
./roller.js
./index.html

# iPhone App files (for full-screen app mode).
./touch-icon-iphone-retina.png
./touch-icon-ipad-retina.png

</cfsavecontent>
<cfcontent type="text/cache-manifest" variable="#toBinary( toBase64( trim( cacheManifest ) ) )#" />
