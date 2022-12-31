---
layout: page
collectionpage: projects

---

<section class="section  typeset">
<ul class="list  list--posts">
  {% for page in site.projects %}
    <li class="item  item--post">
      <article class="article  article--post">

        <h2><a href="{{ site.baseurl }}{{ page.url }}">{{ page.title }}</a></h2>
        
        {{ page.excerpt | markdownify | truncatewords: 60 }}
      </article>
    </li>
  {% endfor %}
</ul>
</section>
