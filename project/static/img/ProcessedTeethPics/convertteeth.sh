#!/bin/bash

for i in $( ls imgorig | grep png ); do
	IF=imgorig/$i
	echo converting: $i
	convert $IF -brightness-contrast 10x20 -modulate 100,125 $i
done
