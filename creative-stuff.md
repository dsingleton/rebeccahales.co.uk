---
title: Creative stuff
items:
- src: 30-minute-series.jpg
  alt:
- src: bird.png
  alt:
- src: birthday-cake.png
  alt:
- src: bookmaking.jpg
  alt:
- src: dalek.png
  alt:
- src: final-bongs.png
  alt:
- src: finishing-school.jpg
  alt:
- src: finishing-school-is-fun.jpg
  alt:
- src: firewords.png
  alt:
- src: heritage-film.png
  alt:
- src: james-martin.jpg
  alt:
- src: lino-cut.jpg
  alt:
- src: more-than-just-a-game.jpg
  alt:
- src: mps-photos-collage.jpg
  alt:
- src: rachel-allen-bake.png
  alt:
- src: reggae-sauce.jpg
  alt:
- src: sophie-conran.png
  alt:
- src: tempest-studios.png
  alt:
- src: verify-presentation.png
  alt:
- src: verify.png
  alt:
---

# {{ page.title }}

## Here are some things I’ve made, or have helped make happen.

<ul class="creative-projects">
{% for item in page.items %}
  <li>
    <img src="/static/images/creative/{{ item.src }}" alt="{{ item.alt }}" />
  </li>
{% endfor %}
</ul>
