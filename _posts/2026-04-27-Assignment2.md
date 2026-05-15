---
title: "Assignment 2: Manual vs. Automated Geocoding"
excerpt_separator: "<!--more-->"
tags:
  - assignment
  - mapping
---

# Assignment 2: Manual vs. Automated Geocoding

## About the Text

*Southern Arabia* (1900) was written by Theodore and Mabel Bent, British explorers who travelled through the Arabian Peninsula in the late 19th century. Theodore Bent was a travel writer and archaeologist connected to the Royal Geographical Society. The book documents their expedition through what is now Yemen and Oman.

The annptated passage talks about the journey the authors had through the Hadhramout valley, a region in present-day Yemen known historically for its trade routes and connections to the Indian Ocean. The text was written for a British readership and describes local populations and places from an outsider perspective. The place names in the text are transliterations of Arabic names written down by British authors, which means they are often inconsistent and do not match modern standardized spellings.

## Manual Annotation in Recogito

The first thing I noticed was that the easiest places to identify were the large, well-known ones. Aden, Bombay, Mecca, Medina, India, and Egypt all came up immediately with correct results. This made sense since these are places that appear in databases under consistent, widely recognized names.

The smaller places specific to the Hadhramout journey were harder. Hagarein, which appears constantly in the text as one of the main stops on the journey, returned no correct match in any of the three gazetteers. The suggestions placed it in Russia and Central Asia since those were 
phonetically similar names, but completely wrong geographically. 

<figure>
  <img src="{{ '/assets/images/hagarein.png' | relative_url }}" alt="hagarein">
  <figcaption>Figure 1: The gazetteer suggestions placed it in Russia and Central Asia, which is clearly incorrect given the context of the text.</figcaption>
</figure>

Makalla eventually matched to "Al Ma'allā" in GeoNames, and Shibahm matched to "Suḩayl Shibām" Both required checking the pin placement before confirming because similar-sounding names exist in completely different countries, and confirming without checking would have placed them nowhere near Yemen.

<figure>
  <img src="{{ '/assets/images/almaalla.png' | relative_url }}" alt="almaalla">
  <figcaption>Figure 2: Makalla matched to "Al Ma'allā" in GeoNames with the pin correctly placed in Yemen.</figcaption>
</figure>

<figure>
  <img src="{{ '/assets/images/shibahm.png' | relative_url }}" alt="shibahm">
  <figcaption>Figure 3: Shibahm correctly matched to its location in Yemen afterverifying the pin placement..</figcaption>
</figure>

One error that actually happened was that Mecca and Medina were briefly matched to locations in the United States, where small towns with both names also exist. This felt similar to the state name problem we discussed in class with "1, the Road." The system defaults to whatever the database returns first, with no awareness of context. Catching this required actually looking at where the pin was placed before confirming.

For places the gazetteers could not identify, I looked up coordinates on Google Maps and entered them manually into the comment field. This worked for some places, but the Wadis were almost impossible to locate. Names like Wadi Al Aisa and Wadi Howeri do not appear in any of the databases under any spelling.

What I found interesting was that the difficulty of identifying a place did not simply come down to how obscure it was. Some places with complex names matched easily, while others that seemed straightforward did not. Aden came up immediately. Makalla, despite being a significant port city, appeared under so many spelling variations that finding the right match required scrolling through several wrong suggestions first.

The reason seems to be the gap between 19th-century British transliterations and standardized modern romanization. The Bents were writing phonetically for a British audience, so "Makalla" instead of "Al Mukalla," "Shibahm" instead of "Shibam," "Sheher" instead of "Ash Shihr." These are not mistakes, just a different system of rendering Arabic into English that modern databases do not index. This explains why so many places in this text fail to match despite being real, 
documented locations.

## Reflecting on the Map

When I looked at the two-layer map I noticed that both the orange (manual) and blue (automated) layers concentrate in the Hadhramout region of eastern Yemen, which is where the journey takes place. Aden at the southern tip has both colors overlapping closely, which is one of the clearest moments of agreement between the two datasets. Medina appears as a correctly placed orange dot in western Saudi Arabia, which was a small confirmation that catching the Mecca/USA error earlier actually made a difference.

<iframe src="https://sa8831.github.io/hostedmaps/interactive_map.html" width="100%" height="500"></iframe>

There is a blue dot in central Saudi Arabia with no corresponding orange marker. This is a place the automated system picked up that I did not tag. It is possible I overlooked it during annotation, or the automated system made an incorrect match. Without going back through the text it is hard to say which. There is also a lone dot on the coast east of Mukalla that 
sits slightly apart from the main cluster, which makes sense given that the journey moves eastward along the coast before heading inland.

The most significant absence on the orange layer is places like Hagarein and Haura. These appear constantly in the text but could not be matched to any entry in HistoGIS, Pleiades, or GeoNames because the names in the text are 19th-century British transliterations of Arabic that do not match the standardized spellings in modern databases. As a result, they have no coordinates and do not appear on the map.

I also noticed that I was naturally more drawn to annotating places in the Arabian peninsula because those felt most relevant to the context. During manual annotation, places in the Arabian Peninsula were prioritized because the text is about a journey through that region. The automated system tags every identified place name equally regardless of context, which is why the blue layer includes more locations outside the immediate journey area.

## Conclusion

Both methods depend on the databases they use. The automated system processed the entire text consistently and produced 99 entries. The manual process was slower, required constant cross-checking, and still left several places unresolved. But the manual process could catch errors like wrong country or wrong continent, which the automated system had no way of flagging.

For a text like this one, where place names are 19th-century British transliterations of Arabic, neither method alone produces a complete or reliable dataset. A complete geographic record would require specialist knowledge of historical Arabic geography that no current database contains.

## Works Cited

- Bent, Theodore and Mabel. Southern Arabia.Project Gutenberg, 1900. https://www.gutenberg.org/cache/epub/21569/pg21569.txt

- https://github.com/sa8831/hostedmaps
READY FOR GRADING

- https://recogito.pelagios.org/


READY FOR GRADING