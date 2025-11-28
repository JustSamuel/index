---
title: Index
layout: base.njk
---

I keep this collection of rabbit hole discoveries so I can return to them later
and so others might find something useful as well. It works as a small research
log and as a way to try and write more often, since that is not a habit I
naturally maintain. Some notes taught me something new and others simply mark a
moment of curiosity.

The idea comes from Deane Barker’s
["Stuff I Looked Up"](https://deanebarker.net/huh/), which inspired both the
project and the simple look of the site. The topics range from software
engineering and theoretical computer science to etymology, an interest I mostly
shared with friends until now. The site stays intentionally light. I try to
ensure that each page remains under
[14kb](https://endtimes.dev/why-your-website-should-be-under-14kb-in-size/) and
follows the principle of [no frameworks or bloat](https://motherfuckingwebsite.com/).
Everything is generated from plain Markdown and kept as straightforward as
possible.

The entire project is available on GitHub
[here](https://github.com/JustSamuel/index), including the notes and the small
setup that builds the site. Anyone is welcome to explore it or learn from it.

## Entries {.items}

<!-- markdownlint-disable MD033 -->
<ul>
{% for note in collections.notes | sortByTitle %}
  <li>
    <a href="{{ note.url }}"{% if note.data.tooltip %}
      title="{{ note.data.tooltip }}"{% endif %}
    >
      {{ note.data.title }}
    </a>
  </li>
{% endfor %}
</ul>
<!-- markdownlint-enable MD033 -->
