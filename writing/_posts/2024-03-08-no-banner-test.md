---
title: "No Banner Test Post"
date: 2024-03-08
authors: ["Elem Oghenekaro"]
tags: ["Test", "No Banner"]
excerpt: "Another test post with no banner to verify our fix works correctly."
banner: false
---

# No Banner Test Post

This is a second test post to verify that the "no banner" option works correctly. This post should be displayed without any banner image at the top.

## Testing the Fix

After making changes to both:
1. generate-posts.js
2. writing/build.js

We should now be able to create posts without banners by setting `banner: false` in the frontmatter.

## Next Steps

Once this test is successful, we'll commit these changes and update the documentation to include this option. 