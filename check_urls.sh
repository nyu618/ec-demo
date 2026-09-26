#!/bin/bash
urls=(
  "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543"
  "https://images.unsplash.com/photo-1544022613-e87ca75a784a"
  "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3"
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a"
  "https://images.unsplash.com/photo-1562157873-818bc0726f68"
  "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9"
  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35"
  "https://images.unsplash.com/photo-1506629082955-511b1aa562c8"
  "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80"
  "https://images.unsplash.com/photo-1627123424574-724758594e93"
  "https://images.unsplash.com/photo-1612902456551-404b9a18e81e"
  "https://images.unsplash.com/photo-1606503825008-909a67e63c3d"
  "https://images.unsplash.com/photo-1576566588028-4147f3842f27"
  "https://images.unsplash.com/photo-1434389677669-e08b4cda3a01"
  "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633"
  "https://images.unsplash.com/photo-1473966968600-fa801b869a1a"
  "https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
  "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab"
  "https://images.unsplash.com/photo-1601924921557-45e6dea0c784"
  "https://images.unsplash.com/photo-1584917865442-de89df76afd3"
  "https://images.unsplash.com/photo-1590874103328-eac38a683ce7"
  "https://images.unsplash.com/photo-1551028719-00167b16eac5"
  "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef"
  "https://images.unsplash.com/photo-1544923246-77307dd270aa"
)
for url in "${urls[@]}"; do
  status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  if [ "$status" != "200" ]; then
    echo "FAILED: $url ($status)"
  fi
done
echo "DONE"
