#!/bin/bash
# MartinEdu — Nature page photo downloader
# Run from your repo root: bash download_nature_photos.sh
# Uses curl which handles Wikimedia authentication correctly

SUCCESS=0; FAIL=0; SKIP=0
TOTAL=280
I=0

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/red-squirrel.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/red-squirrel.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/red-squirrel.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/e/e6/Red_Squirrel_in_St_James%27s_Park%2C_London_-_Nov_2006_edit.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/red-squirrel.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/red-squirrel.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/red-squirrel.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/red-squirrel.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/barn-owl.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/barn-owl.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/barn-owl.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/1/10/Tyto_alba_-British_Wildlife_Centre%2C_Surrey%2C_England-8a_%281%29.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/barn-owl.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/barn-owl.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/barn-owl.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/barn-owl.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/irish-hare.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/irish-hare.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/irish-hare.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/0e/Mountain_Hare_%28Lepus_timidus%29_in_summer_coat.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/irish-hare.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/irish-hare.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/irish-hare.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/irish-hare.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/common-seal.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/common-seal.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/common-seal.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/8c/Phoca_vitulina_Edit.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/common-seal.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/common-seal.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/common-seal.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/common-seal.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/swift.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/swift.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/swift.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/4/42/Common_Swift_at_Basildon.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/swift.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/swift.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/swift.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/swift.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/curlew.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/curlew.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/curlew.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Eurasian_Curlew.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/curlew.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/curlew.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/curlew.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/curlew.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/peregrine.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/peregrine.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/peregrine.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/9/9e/Falco_peregrinus_-_01.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/peregrine.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/peregrine.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/peregrine.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/peregrine.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/brent-goose.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/brent-goose.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/brent-goose.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/09/Branta_bernicla_hrota.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/brent-goose.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/brent-goose.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/brent-goose.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/brent-goose.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/red-kite.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/red-kite.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/red-kite.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/6/67/Red_Kite_-_Milvus_milvus.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/red-kite.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/red-kite.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/red-kite.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/red-kite.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/common-lizard.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/common-lizard.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/common-lizard.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/a/a4/Zootoca_vivipara_bosc.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/common-lizard.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/common-lizard.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/common-lizard.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/common-lizard.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/pipistrelle.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/pipistrelle.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/pipistrelle.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/2/29/Pipistrellus_pipistrellus_crop.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/pipistrelle.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/pipistrelle.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/pipistrelle.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/pipistrelle.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/grey-heron.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/grey-heron.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/grey-heron.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/0c/Grey_Heron_%28Ardea_cinerea%29_in_flight_-_Hamina_-_Finland.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/grey-heron.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/grey-heron.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/grey-heron.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/grey-heron.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/hedgehog.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/hedgehog.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/hedgehog.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/Erinaceus_europaeus_LC0124.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/hedgehog.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/hedgehog.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/hedgehog.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/hedgehog.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/arctic-tern.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/arctic-tern.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/arctic-tern.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/e/e8/Arctic_Tern_in_flight.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/arctic-tern.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/arctic-tern.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/arctic-tern.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/arctic-tern.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/water-vole.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/water-vole.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/water-vole.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/9/92/Water_vole.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/water-vole.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/water-vole.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/water-vole.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/water-vole.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/bog-cotton.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/bog-cotton.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/bog-cotton.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/4/48/Eriophorum_angustifolium_a1.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/bog-cotton.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/bog-cotton.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/bog-cotton.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/bog-cotton.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/heather.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/heather.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/heather.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/8b/Calluna_vulgaris_-_harilik_kanarbik.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/heather.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/heather.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/heather.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/heather.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/yellow-iris.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/yellow-iris.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/yellow-iris.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/2/29/Iris_pseudacorus_-_20060527.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/yellow-iris.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/yellow-iris.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/yellow-iris.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/yellow-iris.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/wood-anemone.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/wood-anemone.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/wood-anemone.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/2/27/Anemone_nemorosa_LC0303.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/wood-anemone.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/wood-anemone.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/wood-anemone.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/wood-anemone.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/thrift.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/thrift.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/thrift.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/82/Armeria_maritima_Westkueste_Schottland.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/thrift.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/thrift.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/thrift.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/thrift.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/lesser-celandine.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/lesser-celandine.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/lesser-celandine.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/a/a0/Ficaria_verna_LC0193.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/lesser-celandine.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/lesser-celandine.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/lesser-celandine.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/lesser-celandine.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/meadowsweet.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/meadowsweet.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/meadowsweet.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/7/75/Filipendula_ulmaria_LC0049.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/meadowsweet.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/meadowsweet.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/meadowsweet.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/meadowsweet.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/cuckoo-flower.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/cuckoo-flower.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/cuckoo-flower.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/d/d3/Cardamine_pratensis_LC0020.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/cuckoo-flower.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/cuckoo-flower.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/cuckoo-flower.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/cuckoo-flower.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/devils-bit-scabious.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/devils-bit-scabious.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/devils-bit-scabious.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/Succisa_pratensis_LC0064.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/devils-bit-scabious.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/devils-bit-scabious.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/devils-bit-scabious.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/devils-bit-scabious.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/sea-holly.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/sea-holly.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/sea-holly.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/d/da/Eryngium_maritimum_kz.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/sea-holly.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/sea-holly.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/sea-holly.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/sea-holly.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/bilberry.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/bilberry.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/bilberry.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/3/33/Blueberry_3148.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/bilberry.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/bilberry.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/bilberry.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/bilberry.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/marsh-marigold.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/marsh-marigold.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/marsh-marigold.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/6/6f/Caltha_palustris_LC0074.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/marsh-marigold.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/marsh-marigold.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/marsh-marigold.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/marsh-marigold.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/purple-moor-grass.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/purple-moor-grass.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/purple-moor-grass.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/a/a5/Molinia_caerulea_subsp._caerulea_kz02.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/purple-moor-grass.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/purple-moor-grass.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/purple-moor-grass.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/purple-moor-grass.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/water-mint.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/water-mint.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/water-mint.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Mentha_aquatica_LC0292.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/water-mint.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/water-mint.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/water-mint.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/water-mint.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/cross-leaved-heath.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/cross-leaved-heath.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/cross-leaved-heath.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/c/c9/Erica_tetralix_a2.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/cross-leaved-heath.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/cross-leaved-heath.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/cross-leaved-heath.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/cross-leaved-heath.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/fly-agaric.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/fly-agaric.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/fly-agaric.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/1/18/Amanita_muscaria_3_vliegenzwammen_op_rij.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/fly-agaric.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/fly-agaric.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/fly-agaric.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/fly-agaric.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/giant-puffball.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/giant-puffball.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/giant-puffball.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/6/68/Calvatia.gigantea.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/giant-puffball.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/giant-puffball.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/giant-puffball.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/giant-puffball.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/oyster-mushroom.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/oyster-mushroom.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/oyster-mushroom.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/8b/Oyster_mushroom_%28Pleurotus_ostreatus%29.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/oyster-mushroom.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/oyster-mushroom.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/oyster-mushroom.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/oyster-mushroom.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/waxcap.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/waxcap.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/waxcap.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/f/fb/Cuphophyllus_pratensis_%28Fr.%29_Bon_%281989%29_%2836093671285%29.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/waxcap.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/waxcap.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/waxcap.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/waxcap.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/blackening-waxcap.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/blackening-waxcap.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/blackening-waxcap.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Hygrocybe_conica_2009_G1.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/blackening-waxcap.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/blackening-waxcap.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/blackening-waxcap.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/blackening-waxcap.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/honey-fungus.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/honey-fungus.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/honey-fungus.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/7/74/Armillaria_mellea_2012_G2.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/honey-fungus.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/honey-fungus.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/honey-fungus.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/honey-fungus.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/velvet-shank.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/velvet-shank.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/velvet-shank.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Flammulina_velutipes_1.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/velvet-shank.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/velvet-shank.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/velvet-shank.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/velvet-shank.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/turkey-tail.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/turkey-tail.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/turkey-tail.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/c/c7/Trametes_versicolor_-_Turkey_Tail.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/turkey-tail.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/turkey-tail.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/turkey-tail.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/turkey-tail.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/earthball.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/earthball.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/earthball.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/83/Scleroderma_citrinum_2009_G2.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/earthball.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/earthball.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/earthball.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/earthball.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/northern-ireland"
if [ -f "nature/northern-ireland/jelly-ear.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/northern-ireland/jelly-ear.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/northern-ireland/jelly-ear.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/7/72/Auricularia_auricula-judae_2012_G4.jpg"
  if [ $? -eq 0 ] && [ -s "nature/northern-ireland/jelly-ear.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/northern-ireland/jelly-ear.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/northern-ireland/jelly-ear.jpg"
    echo "[$I/$TOTAL] FAIL  nature/northern-ireland/jelly-ear.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/red-deer.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/red-deer.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/red-deer.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/1/13/2006_RedDeer_Petrozavodsk.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/red-deer.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/red-deer.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/red-deer.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/red-deer.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/golden-eagle.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/golden-eagle.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/golden-eagle.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/1/1a/Golden_eagle_in_flight_-_5.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/golden-eagle.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/golden-eagle.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/golden-eagle.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/golden-eagle.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/osprey.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/osprey.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/osprey.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/80/Osprey_in_flight_%28Andrew_Reding%29.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/osprey.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/osprey.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/osprey.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/osprey.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/pine-marten.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/pine-marten.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/pine-marten.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/9/9e/Martes_martes-0107.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/pine-marten.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/pine-marten.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/pine-marten.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/pine-marten.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/puffin.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/puffin.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/puffin.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/00/Atlantic_puffin_42.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/puffin.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/puffin.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/puffin.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/puffin.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/capercaillie.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/capercaillie.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/capercaillie.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/d/d2/Tetrao_urogallus_-_01.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/capercaillie.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/capercaillie.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/capercaillie.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/capercaillie.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/red-grouse.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/red-grouse.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/red-grouse.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/b/b2/RedGrouse.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/red-grouse.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/red-grouse.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/red-grouse.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/red-grouse.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/scottish-wildcat.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/scottish-wildcat.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/scottish-wildcat.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/3/3b/Scottish_Wildcat_Scottish_Wildlife_Park.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/scottish-wildcat.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/scottish-wildcat.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/scottish-wildcat.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/scottish-wildcat.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/red-squirrel.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/red-squirrel.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/red-squirrel.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/e/e6/Red_Squirrel_in_St_James%27s_Park%2C_London_-_Nov_2006_edit.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/red-squirrel.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/red-squirrel.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/red-squirrel.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/red-squirrel.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/minke-whale.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/minke-whale.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/minke-whale.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/f/f9/Minke_Whale_%28NOAA%29.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/minke-whale.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/minke-whale.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/minke-whale.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/minke-whale.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/bottlenose-dolphin.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/bottlenose-dolphin.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/bottlenose-dolphin.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/1/10/Tursiops_truncatus_01.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/bottlenose-dolphin.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/bottlenose-dolphin.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/bottlenose-dolphin.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/bottlenose-dolphin.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/mountain-hare.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/mountain-hare.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/mountain-hare.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/0e/Mountain_Hare_%28Lepus_timidus%29_in_summer_coat.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/mountain-hare.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/mountain-hare.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/mountain-hare.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/mountain-hare.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/common-lizard.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/common-lizard.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/common-lizard.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/a/a4/Zootoca_vivipara_bosc.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/common-lizard.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/common-lizard.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/common-lizard.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/common-lizard.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/ptarmigan.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/ptarmigan.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/ptarmigan.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/2/21/Ptarmigan_%28Lagopus_muta%29_in_summer_plumage_-_cropped.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/ptarmigan.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/ptarmigan.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/ptarmigan.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/ptarmigan.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/atlantic-salmon.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/atlantic-salmon.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/atlantic-salmon.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/9/9a/Atlantic_salmon_%28Salmo_salar%29.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/atlantic-salmon.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/atlantic-salmon.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/atlantic-salmon.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/atlantic-salmon.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/scots-pine.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/scots-pine.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/scots-pine.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/3/3e/Scots_Pine_Pinus_sylvestris_Loch_Broom_Highlands.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/scots-pine.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/scots-pine.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/scots-pine.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/scots-pine.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/bluebell.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/bluebell.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/bluebell.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/8c/Bluebell_-_geograph.org.uk_-_1412360.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/bluebell.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/bluebell.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/bluebell.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/bluebell.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/sundew.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/sundew.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/sundew.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/4/45/Drosera_rotundifolia_Scawen_1.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/sundew.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/sundew.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/sundew.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/sundew.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/rowan.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/rowan.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/rowan.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/3/34/Rowan_Sorbus_aucuparia_Beeren.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/rowan.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/rowan.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/rowan.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/rowan.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/bog-myrtle.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/bog-myrtle.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/bog-myrtle.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/b/b3/Myrica_gale_-_bog_myrtle.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/bog-myrtle.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/bog-myrtle.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/bog-myrtle.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/bog-myrtle.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/mountain-avens.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/mountain-avens.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/mountain-avens.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/1/14/Dryas_octopetala_a1.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/mountain-avens.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/mountain-avens.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/mountain-avens.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/mountain-avens.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/common-reed.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/common-reed.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/common-reed.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/7/7f/Phragmites_australis_Biebrza.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/common-reed.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/common-reed.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/common-reed.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/common-reed.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/purple-loosestrife.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/purple-loosestrife.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/purple-loosestrife.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/b/b2/Lythrum_salicaria_LC0233.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/purple-loosestrife.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/purple-loosestrife.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/purple-loosestrife.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/purple-loosestrife.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/tormentil.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/tormentil.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/tormentil.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Potentilla_erecta_LC0064.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/tormentil.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/tormentil.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/tormentil.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/tormentil.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/crowberry.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/crowberry.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/crowberry.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/e/e0/Empetrum_nigrum1.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/crowberry.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/crowberry.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/crowberry.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/crowberry.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/cross-leaved-heath.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/cross-leaved-heath.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/cross-leaved-heath.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/c/c9/Erica_tetralix_a2.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/cross-leaved-heath.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/cross-leaved-heath.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/cross-leaved-heath.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/cross-leaved-heath.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/alpine-lady-fern.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/alpine-lady-fern.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/alpine-lady-fern.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/4/4e/Athyrium_distentifolium_a.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/alpine-lady-fern.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/alpine-lady-fern.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/alpine-lady-fern.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/alpine-lady-fern.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/wood-sorrel.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/wood-sorrel.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/wood-sorrel.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/6/60/Oxalis_acetosella_LC0101.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/wood-sorrel.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/wood-sorrel.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/wood-sorrel.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/wood-sorrel.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/lesser-twayblade.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/lesser-twayblade.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/lesser-twayblade.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/9/94/Neottia_cordata_060704.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/lesser-twayblade.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/lesser-twayblade.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/lesser-twayblade.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/lesser-twayblade.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/goldenrod.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/goldenrod.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/goldenrod.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/6/6f/Solidago_virgaurea_LC0278.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/goldenrod.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/goldenrod.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/goldenrod.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/goldenrod.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/chanterelle.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/chanterelle.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/chanterelle.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/04/Golden_Chanterelle.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/chanterelle.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/chanterelle.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/chanterelle.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/chanterelle.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/birch-polypore.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/birch-polypore.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/birch-polypore.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/86/Birch_Polypore_edit.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/birch-polypore.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/birch-polypore.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/birch-polypore.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/birch-polypore.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/amethyst-deceiver.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/amethyst-deceiver.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/amethyst-deceiver.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/3/3d/2009-10-11_Laccaria_amethystina_%28Huds.%29_Cooke_58993.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/amethyst-deceiver.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/amethyst-deceiver.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/amethyst-deceiver.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/amethyst-deceiver.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/birch-bolete.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/birch-bolete.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/birch-bolete.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/6/6d/Leccinum_scabrum_-_Rough-stemmed_Bolete.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/birch-bolete.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/birch-bolete.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/birch-bolete.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/birch-bolete.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/parrot-waxcap.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/parrot-waxcap.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/parrot-waxcap.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/e/e1/Gliophorus_psittacinus_2.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/parrot-waxcap.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/parrot-waxcap.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/parrot-waxcap.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/parrot-waxcap.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/sulphur-tuft.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/sulphur-tuft.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/sulphur-tuft.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/9/9d/Hypholoma_fasciculare_2009_G6.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/sulphur-tuft.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/sulphur-tuft.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/sulphur-tuft.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/sulphur-tuft.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/hedgehog-mushroom.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/hedgehog-mushroom.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/hedgehog-mushroom.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/c/c0/Hydnum_repandum_2012_G3.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/hedgehog-mushroom.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/hedgehog-mushroom.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/hedgehog-mushroom.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/hedgehog-mushroom.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/velvet-bolete.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/velvet-bolete.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/velvet-bolete.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Suillus_variegatus.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/velvet-bolete.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/velvet-bolete.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/velvet-bolete.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/velvet-bolete.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/woolly-milkcap.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/woolly-milkcap.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/woolly-milkcap.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/a/a2/Lactarius_torminosus_2009_G1.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/woolly-milkcap.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/woolly-milkcap.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/woolly-milkcap.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/woolly-milkcap.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/scotland"
if [ -f "nature/scotland/pine-spike.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/scotland/pine-spike.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/scotland/pine-spike.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gomphidius_rutilus_%28Chroogomphus_rutilus%29_2009_G1.jpg"
  if [ $? -eq 0 ] && [ -s "nature/scotland/pine-spike.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/scotland/pine-spike.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/scotland/pine-spike.jpg"
    echo "[$I/$TOTAL] FAIL  nature/scotland/pine-spike.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/white-tailed-eagle.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/white-tailed-eagle.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/white-tailed-eagle.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/3/31/Haliaeetus_albicilla_-_01.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/white-tailed-eagle.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/white-tailed-eagle.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/white-tailed-eagle.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/white-tailed-eagle.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/atlantic-salmon.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/atlantic-salmon.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/atlantic-salmon.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/9/9a/Atlantic_salmon_%28Salmo_salar%29.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/atlantic-salmon.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/atlantic-salmon.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/atlantic-salmon.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/atlantic-salmon.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/otter.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/otter.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/otter.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/87/Fischotter%2C_Lutra_Lutra.JPG"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/otter.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/otter.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/otter.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/otter.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/corncrake.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/corncrake.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/corncrake.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/5/58/Corncrake_Crex_crex.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/corncrake.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/corncrake.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/corncrake.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/corncrake.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/grey-seal.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/grey-seal.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/grey-seal.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/0e/Grey_seal_%28Halichoerus_grypus%29_2014.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/grey-seal.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/grey-seal.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/grey-seal.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/grey-seal.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/red-fox.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/red-fox.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/red-fox.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/80/Vulpes_vulpes_ssp_fulvus.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/red-fox.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/red-fox.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/red-fox.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/red-fox.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/badger.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/badger.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/badger.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/d/dc/Badger-badger.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/badger.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/badger.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/badger.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/badger.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/painted-lady.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/painted-lady.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/painted-lady.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/83/Painted_lady_%28Vanessa_cardui%29.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/painted-lady.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/painted-lady.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/painted-lady.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/painted-lady.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/harbour-porpoise.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/harbour-porpoise.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/harbour-porpoise.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/d/da/Harbour_porpoise.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/harbour-porpoise.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/harbour-porpoise.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/harbour-porpoise.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/harbour-porpoise.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/red-kite.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/red-kite.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/red-kite.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/6/67/Red_Kite_-_Milvus_milvus.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/red-kite.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/red-kite.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/red-kite.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/red-kite.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/common-frog.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/common-frog.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/common-frog.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/0c/Rana_temporaria.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/common-frog.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/common-frog.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/common-frog.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/common-frog.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/swallow.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/swallow.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/swallow.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/b/b4/Hirundo_rustica_-Flickr_-_Lip_Kee.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/swallow.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/swallow.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/swallow.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/swallow.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/pine-marten.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/pine-marten.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/pine-marten.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/9/9e/Martes_martes-0107.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/pine-marten.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/pine-marten.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/pine-marten.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/pine-marten.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/whooper-swan.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/whooper-swan.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/whooper-swan.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/9/94/Whooper_Swans_-_geograph.org.uk_-_1008059.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/whooper-swan.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/whooper-swan.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/whooper-swan.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/whooper-swan.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/basking-shark.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/basking-shark.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/basking-shark.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/1/1b/Cetorhinus_maximus_by_greg_skomal.JPG"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/basking-shark.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/basking-shark.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/basking-shark.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/basking-shark.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/fuchsia.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/fuchsia.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/fuchsia.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/d/d0/Fuchsia_magellanica2.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/fuchsia.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/fuchsia.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/fuchsia.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/fuchsia.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/montbretia.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/montbretia.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/montbretia.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Crocosmia_x_crocosmiiflora.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/montbretia.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/montbretia.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/montbretia.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/montbretia.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/early-purple-orchid.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/early-purple-orchid.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/early-purple-orchid.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/a/ac/Orchis_mascula_LC0366.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/early-purple-orchid.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/early-purple-orchid.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/early-purple-orchid.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/early-purple-orchid.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/spring-gentian.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/spring-gentian.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/spring-gentian.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/8a/Gentiana_verna_Ois%C3%ADs_2.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/spring-gentian.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/spring-gentian.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/spring-gentian.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/spring-gentian.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/thrift.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/thrift.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/thrift.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/82/Armeria_maritima_Westkueste_Schottland.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/thrift.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/thrift.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/thrift.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/thrift.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/bog-asphodel.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/bog-asphodel.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/bog-asphodel.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/b/bd/Narthecium_ossifragum_LC0256.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/bog-asphodel.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/bog-asphodel.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/bog-asphodel.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/bog-asphodel.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/tormentil.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/tormentil.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/tormentil.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Potentilla_erecta_LC0064.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/tormentil.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/tormentil.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/tormentil.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/tormentil.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/ragged-robin.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/ragged-robin.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/ragged-robin.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/1/1d/Silene_flos-cuculi_LC0044.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/ragged-robin.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/ragged-robin.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/ragged-robin.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/ragged-robin.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/ivy.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/ivy.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/ivy.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/6/68/Hedera_helix_070103.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/ivy.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/ivy.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/ivy.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/ivy.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/gorse.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/gorse.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/gorse.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/8f/Ulex_europaeus1.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/gorse.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/gorse.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/gorse.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/gorse.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/hawthorn.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/hawthorn.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/hawthorn.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Hawthorn_-_geograph.org.uk_-_1365015.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/hawthorn.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/hawthorn.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/hawthorn.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/hawthorn.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/sea-campion.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/sea-campion.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/sea-campion.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/2/27/Silene_uniflora_Worthing.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/sea-campion.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/sea-campion.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/sea-campion.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/sea-campion.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/primrose.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/primrose.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/primrose.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/3/39/Primula_vulgaris_LC0073.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/primrose.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/primrose.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/primrose.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/primrose.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/yellow-iris.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/yellow-iris.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/yellow-iris.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/2/29/Iris_pseudacorus_-_20060527.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/yellow-iris.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/yellow-iris.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/yellow-iris.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/yellow-iris.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/maidenhair-fern.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/maidenhair-fern.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/maidenhair-fern.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adiantum_capillus-veneris.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/maidenhair-fern.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/maidenhair-fern.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/maidenhair-fern.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/maidenhair-fern.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/death-cap.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/death-cap.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/death-cap.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Amanita_phalloides_1.JPG"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/death-cap.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/death-cap.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/death-cap.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/death-cap.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/penny-bun.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/penny-bun.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/penny-bun.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Boletus_edulis_IT.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/penny-bun.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/penny-bun.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/penny-bun.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/penny-bun.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/earthstar.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/earthstar.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/earthstar.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/84/Geastrum_triplex_1.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/earthstar.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/earthstar.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/earthstar.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/earthstar.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/velvet-shank.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/velvet-shank.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/velvet-shank.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Flammulina_velutipes_1.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/velvet-shank.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/velvet-shank.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/velvet-shank.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/velvet-shank.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/scarlet-elf-cup.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/scarlet-elf-cup.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/scarlet-elf-cup.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/4/4b/Sarcoscypha_coccinea.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/scarlet-elf-cup.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/scarlet-elf-cup.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/scarlet-elf-cup.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/scarlet-elf-cup.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/turkey-tail.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/turkey-tail.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/turkey-tail.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/c/c7/Trametes_versicolor_-_Turkey_Tail.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/turkey-tail.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/turkey-tail.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/turkey-tail.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/turkey-tail.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/honey-fungus.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/honey-fungus.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/honey-fungus.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/7/74/Armillaria_mellea_2012_G2.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/honey-fungus.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/honey-fungus.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/honey-fungus.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/honey-fungus.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/jelly-ear.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/jelly-ear.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/jelly-ear.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/7/72/Auricularia_auricula-judae_2012_G4.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/jelly-ear.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/jelly-ear.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/jelly-ear.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/jelly-ear.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/shaggy-inkcap.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/shaggy-inkcap.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/shaggy-inkcap.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/d/d3/Coprinus_comatus_2011_G2.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/shaggy-inkcap.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/shaggy-inkcap.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/shaggy-inkcap.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/shaggy-inkcap.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/republic-ireland"
if [ -f "nature/republic-ireland/stinkhorn.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/republic-ireland/stinkhorn.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/republic-ireland/stinkhorn.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/b/b0/Phallus_impudicus_2011_G1.jpg"
  if [ $? -eq 0 ] && [ -s "nature/republic-ireland/stinkhorn.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/republic-ireland/stinkhorn.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/republic-ireland/stinkhorn.jpg"
    echo "[$I/$TOTAL] FAIL  nature/republic-ireland/stinkhorn.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/red-kite.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/red-kite.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/red-kite.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/6/67/Red_Kite_-_Milvus_milvus.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/red-kite.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/red-kite.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/red-kite.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/red-kite.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/polecat.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/polecat.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/polecat.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/6/68/Mustela_putorius_-_1700-1880_-_Print_-_Iconographia_Zoologica_-_Special_Collections_University_of_Amsterdam.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/polecat.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/polecat.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/polecat.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/polecat.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/sea-trout.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/sea-trout.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/sea-trout.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/6/68/Salmo_trutta_Sturm.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/sea-trout.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/sea-trout.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/sea-trout.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/sea-trout.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/chough.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/chough.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/chough.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/5/59/Pyrrhocorax_pyrrhocorax_-Pembrokeshire%2C_Wales-8.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/chough.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/chough.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/chough.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/chough.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/horseshoe-bat.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/horseshoe-bat.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/horseshoe-bat.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/82/Horseshoe_bat.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/horseshoe-bat.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/horseshoe-bat.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/horseshoe-bat.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/horseshoe-bat.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/gwyniad.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/gwyniad.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/gwyniad.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/3/39/Gwyniad_fish.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/gwyniad.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/gwyniad.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/gwyniad.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/gwyniad.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/bottlenose-dolphin.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/bottlenose-dolphin.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/bottlenose-dolphin.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/1/10/Tursiops_truncatus_01.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/bottlenose-dolphin.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/bottlenose-dolphin.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/bottlenose-dolphin.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/bottlenose-dolphin.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/merlin.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/merlin.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/merlin.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/4/43/Falco_columbarius_-_01.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/merlin.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/merlin.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/merlin.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/merlin.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/grey-seal.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/grey-seal.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/grey-seal.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/0e/Grey_seal_%28Halichoerus_grypus%29_2014.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/grey-seal.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/grey-seal.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/grey-seal.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/grey-seal.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/common-sandpiper.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/common-sandpiper.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/common-sandpiper.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/b/b2/CommonSandpiper.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/common-sandpiper.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/common-sandpiper.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/common-sandpiper.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/common-sandpiper.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/slow-worm.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/slow-worm.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/slow-worm.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/4/4f/Anguis_fragilis_2.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/slow-worm.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/slow-worm.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/slow-worm.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/slow-worm.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/harbour-porpoise.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/harbour-porpoise.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/harbour-porpoise.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/d/da/Harbour_porpoise.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/harbour-porpoise.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/harbour-porpoise.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/harbour-porpoise.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/harbour-porpoise.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/curlew.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/curlew.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/curlew.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Eurasian_Curlew.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/curlew.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/curlew.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/curlew.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/curlew.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/otter.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/otter.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/otter.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/87/Fischotter%2C_Lutra_Lutra.JPG"
  if [ $? -eq 0 ] && [ -s "nature/wales/otter.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/otter.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/otter.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/otter.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/puffin.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/puffin.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/puffin.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/00/Atlantic_puffin_42.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/puffin.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/puffin.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/puffin.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/puffin.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/snowdon-lily.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/snowdon-lily.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/snowdon-lily.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/5/5e/Lloydia_serotina_flower.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/snowdon-lily.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/snowdon-lily.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/snowdon-lily.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/snowdon-lily.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/welsh-poppy.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/welsh-poppy.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/welsh-poppy.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/7/7e/Meconopsis_cambrica.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/welsh-poppy.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/welsh-poppy.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/welsh-poppy.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/welsh-poppy.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/grass-of-parnassus.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/grass-of-parnassus.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/grass-of-parnassus.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/d/d2/Parnassia_palustris_LC0083.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/grass-of-parnassus.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/grass-of-parnassus.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/grass-of-parnassus.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/grass-of-parnassus.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/purple-saxifrage.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/purple-saxifrage.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/purple-saxifrage.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/07/Saxifraga_oppositifolia_a1.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/purple-saxifrage.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/purple-saxifrage.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/purple-saxifrage.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/purple-saxifrage.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/bluebell.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/bluebell.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/bluebell.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/8c/Bluebell_-_geograph.org.uk_-_1412360.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/bluebell.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/bluebell.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/bluebell.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/bluebell.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/sea-campion.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/sea-campion.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/sea-campion.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/2/27/Silene_uniflora_Worthing.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/sea-campion.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/sea-campion.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/sea-campion.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/sea-campion.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/early-marsh-orchid.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/early-marsh-orchid.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/early-marsh-orchid.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/b/b2/Dactylorhiza_incarnata_%28LC0292%29.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/early-marsh-orchid.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/early-marsh-orchid.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/early-marsh-orchid.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/early-marsh-orchid.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/cottongrass.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/cottongrass.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/cottongrass.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/0e/Eriophorum_vaginatum_Torf.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/cottongrass.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/cottongrass.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/cottongrass.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/cottongrass.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/wood-anemone.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/wood-anemone.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/wood-anemone.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/2/27/Anemone_nemorosa_LC0303.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/wood-anemone.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/wood-anemone.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/wood-anemone.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/wood-anemone.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/primrose.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/primrose.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/primrose.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/3/39/Primula_vulgaris_LC0073.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/primrose.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/primrose.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/primrose.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/primrose.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/whorled-caraway.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/whorled-caraway.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/whorled-caraway.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/f/f5/Carum_verticillatum_Oisterwijk.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/whorled-caraway.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/whorled-caraway.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/whorled-caraway.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/whorled-caraway.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/heather.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/heather.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/heather.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/8b/Calluna_vulgaris_-_harilik_kanarbik.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/heather.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/heather.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/heather.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/heather.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/gorse.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/gorse.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/gorse.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/8f/Ulex_europaeus1.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/gorse.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/gorse.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/gorse.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/gorse.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/green-spleenwort.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/green-spleenwort.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/green-spleenwort.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/5/52/Asplenium_viride_LC0069.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/green-spleenwort.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/green-spleenwort.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/green-spleenwort.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/green-spleenwort.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/butterfly-orchid.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/butterfly-orchid.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/butterfly-orchid.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/3/34/Platanthera_chlorantha_LC0066.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/butterfly-orchid.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/butterfly-orchid.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/butterfly-orchid.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/butterfly-orchid.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/chicken-of-woods.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/chicken-of-woods.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/chicken-of-woods.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/7/7a/Laetiporus_sulphureus_2015_G1.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/chicken-of-woods.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/chicken-of-woods.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/chicken-of-woods.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/chicken-of-woods.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/beefsteak-fungus.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/beefsteak-fungus.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/beefsteak-fungus.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/9/9d/Fistulina_hepatica_2010_G5.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/beefsteak-fungus.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/beefsteak-fungus.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/beefsteak-fungus.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/beefsteak-fungus.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/dryads-saddle.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/dryads-saddle.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/dryads-saddle.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/1/18/Polyporus_squamosus_2012_G2.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/dryads-saddle.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/dryads-saddle.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/dryads-saddle.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/dryads-saddle.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/earth-tongue.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/earth-tongue.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/earth-tongue.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/5/5e/Geoglossum_cookeianum_2009_G1.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/earth-tongue.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/earth-tongue.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/earth-tongue.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/earth-tongue.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/giant-funnel.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/giant-funnel.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/giant-funnel.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/d/d8/Leucopaxillus_giganteus_2009_G2.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/giant-funnel.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/giant-funnel.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/giant-funnel.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/giant-funnel.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/purple-jellydisc.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/purple-jellydisc.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/purple-jellydisc.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Ascocoryne_sarcoides_2009_G1.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/purple-jellydisc.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/purple-jellydisc.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/purple-jellydisc.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/purple-jellydisc.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/oak-polypore.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/oak-polypore.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/oak-polypore.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/2/2e/Piptoporus_quercinus.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/oak-polypore.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/oak-polypore.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/oak-polypore.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/oak-polypore.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/meadow-waxcap.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/meadow-waxcap.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/meadow-waxcap.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/f/fb/Cuphophyllus_pratensis_%28Fr.%29_Bon_%281989%29_%2836093671285%29.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/meadow-waxcap.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/meadow-waxcap.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/meadow-waxcap.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/meadow-waxcap.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/stinkhorn.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/stinkhorn.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/stinkhorn.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/b/b0/Phallus_impudicus_2011_G1.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/stinkhorn.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/stinkhorn.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/stinkhorn.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/stinkhorn.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/wales"
if [ -f "nature/wales/scarlet-caterpillarclub.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/wales/scarlet-caterpillarclub.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/wales/scarlet-caterpillarclub.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/6/60/Cordyceps_militaris_2009_G3.jpg"
  if [ $? -eq 0 ] && [ -s "nature/wales/scarlet-caterpillarclub.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/wales/scarlet-caterpillarclub.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/wales/scarlet-caterpillarclub.jpg"
    echo "[$I/$TOTAL] FAIL  nature/wales/scarlet-caterpillarclub.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/red-squirrel.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/red-squirrel.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/red-squirrel.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/e/e6/Red_Squirrel_in_St_James%27s_Park%2C_London_-_Nov_2006_edit.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/red-squirrel.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/red-squirrel.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/red-squirrel.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/red-squirrel.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/golden-plover.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/golden-plover.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/golden-plover.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/3/38/Pluvialis_apricaria_-_01.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/golden-plover.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/golden-plover.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/golden-plover.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/golden-plover.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/curlew.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/curlew.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/curlew.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Eurasian_Curlew.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/curlew.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/curlew.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/curlew.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/curlew.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/short-eared-owl.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/short-eared-owl.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/short-eared-owl.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Short-eared_Owl_%28Asio_flammeus%29_%2814278511723%29.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/short-eared-owl.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/short-eared-owl.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/short-eared-owl.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/short-eared-owl.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/water-vole.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/water-vole.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/water-vole.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/9/92/Water_vole.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/water-vole.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/water-vole.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/water-vole.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/water-vole.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/lapwing.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/lapwing.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/lapwing.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/1/14/Vanellus_vanellus_in_flight.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/lapwing.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/lapwing.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/lapwing.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/lapwing.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/brown-hare.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/brown-hare.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/brown-hare.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/09/Brown_Hare_%28Lepus_europaeus%29.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/brown-hare.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/brown-hare.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/brown-hare.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/brown-hare.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/whooper-swan.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/whooper-swan.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/whooper-swan.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/9/94/Whooper_Swans_-_geograph.org.uk_-_1008059.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/whooper-swan.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/whooper-swan.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/whooper-swan.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/whooper-swan.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/adder.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/adder.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/adder.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/e/e1/Vipera_berus_LC0124.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/adder.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/adder.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/adder.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/adder.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/pied-flycatcher.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/pied-flycatcher.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/pied-flycatcher.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/4/45/Ficedula_hypoleuca_-_01.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/pied-flycatcher.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/pied-flycatcher.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/pied-flycatcher.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/pied-flycatcher.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/hen-harrier.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/hen-harrier.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/hen-harrier.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/e/e2/Hen_harrier_Circus_cyaneus.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/hen-harrier.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/hen-harrier.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/hen-harrier.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/hen-harrier.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/roe-deer.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/roe-deer.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/roe-deer.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/b/b3/Capreolus_capreolus_2_Jojo.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/roe-deer.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/roe-deer.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/roe-deer.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/roe-deer.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/swift.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/swift.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/swift.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/4/42/Common_Swift_at_Basildon.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/swift.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/swift.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/swift.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/swift.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/peregrine.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/peregrine.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/peregrine.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/9/9e/Falco_peregrinus_-_01.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/peregrine.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/peregrine.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/peregrine.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/peregrine.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/natterjack-toad.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/natterjack-toad.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/natterjack-toad.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Epidalea_calamita.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/natterjack-toad.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/natterjack-toad.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/natterjack-toad.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/natterjack-toad.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/bird-cherry.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/bird-cherry.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/bird-cherry.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/7/70/Prunus_padus_subsp._padus_Sturm53.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/bird-cherry.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/bird-cherry.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/bird-cherry.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/bird-cherry.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/melancholy-thistle.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/melancholy-thistle.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/melancholy-thistle.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/3/39/Cirsium_heterophyllum_a2.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/melancholy-thistle.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/melancholy-thistle.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/melancholy-thistle.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/melancholy-thistle.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/mountain-pansy.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/mountain-pansy.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/mountain-pansy.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/f/f5/Viola_lutea_LC0067.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/mountain-pansy.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/mountain-pansy.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/mountain-pansy.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/mountain-pansy.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/globeflower.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/globeflower.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/globeflower.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/6/61/Trollius_europaeus_LC0088.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/globeflower.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/globeflower.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/globeflower.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/globeflower.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/spring-sandwort.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/spring-sandwort.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/spring-sandwort.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/f/f2/Minuartia_verna_a.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/spring-sandwort.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/spring-sandwort.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/spring-sandwort.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/spring-sandwort.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/birds-eye-primrose.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/birds-eye-primrose.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/birds-eye-primrose.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/d/d3/Primula_farinosa_LC0168.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/birds-eye-primrose.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/birds-eye-primrose.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/birds-eye-primrose.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/birds-eye-primrose.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/grass-of-parnassus.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/grass-of-parnassus.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/grass-of-parnassus.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/d/d2/Parnassia_palustris_LC0083.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/grass-of-parnassus.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/grass-of-parnassus.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/grass-of-parnassus.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/grass-of-parnassus.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/purple-saxifrage.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/purple-saxifrage.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/purple-saxifrage.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/07/Saxifraga_oppositifolia_a1.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/purple-saxifrage.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/purple-saxifrage.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/purple-saxifrage.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/purple-saxifrage.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/sea-lavender.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/sea-lavender.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/sea-lavender.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Limonium_vulgare_Biebrza_2.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/sea-lavender.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/sea-lavender.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/sea-lavender.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/sea-lavender.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/rowan.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/rowan.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/rowan.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/3/34/Rowan_Sorbus_aucuparia_Beeren.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/rowan.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/rowan.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/rowan.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/rowan.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/heather.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/heather.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/heather.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/8b/Calluna_vulgaris_-_harilik_kanarbik.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/heather.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/heather.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/heather.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/heather.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/great-burnet.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/great-burnet.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/great-burnet.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/3/37/Sanguisorba_officinalis_LC0174.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/great-burnet.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/great-burnet.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/great-burnet.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/great-burnet.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/wood-cranesbill.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/wood-cranesbill.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/wood-cranesbill.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/05/Geranium_sylvaticum_LC0237.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/wood-cranesbill.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/wood-cranesbill.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/wood-cranesbill.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/wood-cranesbill.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/thrift.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/thrift.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/thrift.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/82/Armeria_maritima_Westkueste_Schottland.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/thrift.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/thrift.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/thrift.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/thrift.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/cloudberry.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/cloudberry.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/cloudberry.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/d/d8/Rubus_chamaemorus_3.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/cloudberry.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/cloudberry.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/cloudberry.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/cloudberry.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/velvet-shank.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/velvet-shank.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/velvet-shank.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Flammulina_velutipes_1.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/velvet-shank.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/velvet-shank.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/velvet-shank.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/velvet-shank.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/golden-scalycap.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/golden-scalycap.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/golden-scalycap.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/a/a3/Pholiota_squarrosa_2009_G3.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/golden-scalycap.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/golden-scalycap.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/golden-scalycap.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/golden-scalycap.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/giant-puffball.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/giant-puffball.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/giant-puffball.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/6/68/Calvatia.gigantea.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/giant-puffball.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/giant-puffball.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/giant-puffball.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/giant-puffball.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/crimson-waxcap.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/crimson-waxcap.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/crimson-waxcap.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/d/d1/Hygrocybe_punicea.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/crimson-waxcap.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/crimson-waxcap.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/crimson-waxcap.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/crimson-waxcap.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/fly-agaric.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/fly-agaric.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/fly-agaric.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/1/18/Amanita_muscaria_3_vliegenzwammen_op_rij.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/fly-agaric.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/fly-agaric.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/fly-agaric.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/fly-agaric.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/jelly-ear.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/jelly-ear.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/jelly-ear.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/7/72/Auricularia_auricula-judae_2012_G4.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/jelly-ear.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/jelly-ear.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/jelly-ear.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/jelly-ear.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/birch-polypore.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/birch-polypore.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/birch-polypore.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/86/Birch_Polypore_edit.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/birch-polypore.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/birch-polypore.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/birch-polypore.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/birch-polypore.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/chanterelle.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/chanterelle.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/chanterelle.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/04/Golden_Chanterelle.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/chanterelle.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/chanterelle.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/chanterelle.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/chanterelle.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/sulphur-tuft.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/sulphur-tuft.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/sulphur-tuft.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/9/9d/Hypholoma_fasciculare_2009_G6.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/sulphur-tuft.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/sulphur-tuft.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/sulphur-tuft.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/sulphur-tuft.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/north-england"
if [ -f "nature/north-england/amethyst-deceiver.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/north-england/amethyst-deceiver.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/north-england/amethyst-deceiver.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/3/3d/2009-10-11_Laccaria_amethystina_%28Huds.%29_Cooke_58993.jpg"
  if [ $? -eq 0 ] && [ -s "nature/north-england/amethyst-deceiver.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/north-england/amethyst-deceiver.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/north-england/amethyst-deceiver.jpg"
    echo "[$I/$TOTAL] FAIL  nature/north-england/amethyst-deceiver.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/bittern.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/bittern.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/bittern.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/d/d4/Eurasian_bittern_%28Botaurus_stellaris%29.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/bittern.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/bittern.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/bittern.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/bittern.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/marsh-harrier.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/marsh-harrier.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/marsh-harrier.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/a/a1/Circus_aeruginosus_-_01.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/marsh-harrier.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/marsh-harrier.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/marsh-harrier.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/marsh-harrier.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/crane.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/crane.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/crane.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/04/Grus_grus_3_%28Martin_Mecnarowski%29.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/crane.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/crane.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/crane.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/crane.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/barn-owl.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/barn-owl.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/barn-owl.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/1/10/Tyto_alba_-British_Wildlife_Centre%2C_Surrey%2C_England-8a_%281%29.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/barn-owl.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/barn-owl.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/barn-owl.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/barn-owl.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/fen-raft-spider.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/fen-raft-spider.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/fen-raft-spider.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/6/6e/Dolomedes_plantarius.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/fen-raft-spider.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/fen-raft-spider.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/fen-raft-spider.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/fen-raft-spider.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/red-kite.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/red-kite.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/red-kite.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/6/67/Red_Kite_-_Milvus_milvus.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/red-kite.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/red-kite.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/red-kite.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/red-kite.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/white-admiral.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/white-admiral.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/white-admiral.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/0d/White_admiral_butterfly_%28Limenitis_camilla%29.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/white-admiral.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/white-admiral.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/white-admiral.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/white-admiral.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/water-vole.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/water-vole.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/water-vole.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/9/92/Water_vole.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/water-vole.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/water-vole.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/water-vole.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/water-vole.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/brown-long-eared-bat.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/brown-long-eared-bat.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/brown-long-eared-bat.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/f/ff/Plecotus_auritus_-_1700-1880_-_Print_-_Iconographia_Zoologica_-_Special_Collections_University_of_Amsterdam.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/brown-long-eared-bat.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/brown-long-eared-bat.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/brown-long-eared-bat.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/brown-long-eared-bat.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/common-tern.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/common-tern.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/common-tern.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/88/Common_tern_%28Sterna_hirundo%29_in_flight.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/common-tern.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/common-tern.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/common-tern.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/common-tern.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/great-crested-newt.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/great-crested-newt.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/great-crested-newt.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/2/27/Triturus_cristatus_male_Vlasac.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/great-crested-newt.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/great-crested-newt.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/great-crested-newt.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/great-crested-newt.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/brown-hare.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/brown-hare.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/brown-hare.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/09/Brown_Hare_%28Lepus_europaeus%29.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/brown-hare.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/brown-hare.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/brown-hare.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/brown-hare.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/stag-beetle.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/stag-beetle.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/stag-beetle.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/a/a4/Lucanus_cervus_qtl5.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/stag-beetle.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/stag-beetle.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/stag-beetle.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/stag-beetle.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/osprey.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/osprey.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/osprey.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/80/Osprey_in_flight_%28Andrew_Reding%29.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/osprey.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/osprey.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/osprey.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/osprey.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/avocet.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/avocet.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/avocet.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/6/6e/Recurvirostra_avosetta_-_01.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/avocet.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/avocet.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/avocet.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/avocet.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/pasque-flower.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/pasque-flower.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/pasque-flower.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/7/73/Pulsatilla_vulgaris_LC0019.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/pasque-flower.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/pasque-flower.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/pasque-flower.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/pasque-flower.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/fen-orchid.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/fen-orchid.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/fen-orchid.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/Liparis_loeselii.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/fen-orchid.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/fen-orchid.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/fen-orchid.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/fen-orchid.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/yellow-water-lily.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/yellow-water-lily.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/yellow-water-lily.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/d/d3/Nuphar_lutea_LC0235.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/yellow-water-lily.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/yellow-water-lily.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/yellow-water-lily.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/yellow-water-lily.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/greater-spearwort.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/greater-spearwort.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/greater-spearwort.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/00/Ranunculus_lingua_LC0093.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/greater-spearwort.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/greater-spearwort.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/greater-spearwort.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/greater-spearwort.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/bluebell.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/bluebell.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/bluebell.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/8c/Bluebell_-_geograph.org.uk_-_1412360.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/bluebell.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/bluebell.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/bluebell.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/bluebell.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/oxlip.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/oxlip.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/oxlip.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/9/9a/Primula_elatior_LC0183.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/oxlip.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/oxlip.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/oxlip.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/oxlip.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/marsh-pea.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/marsh-pea.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/marsh-pea.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/d/d3/Lathyrus_palustris_LC0290.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/marsh-pea.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/marsh-pea.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/marsh-pea.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/marsh-pea.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/cowslip.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/cowslip.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/cowslip.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/4/41/Primula_veris_LC0057.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/cowslip.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/cowslip.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/cowslip.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/cowslip.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/purple-loosestrife.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/purple-loosestrife.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/purple-loosestrife.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/b/b2/Lythrum_salicaria_LC0233.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/purple-loosestrife.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/purple-loosestrife.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/purple-loosestrife.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/purple-loosestrife.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/bee-orchid.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/bee-orchid.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/bee-orchid.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/1/18/Ophrys_apifera_-_Malmsbury.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/bee-orchid.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/bee-orchid.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/bee-orchid.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/bee-orchid.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/water-soldier.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/water-soldier.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/water-soldier.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/4/48/Stratiotes_aloides_LC0299.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/water-soldier.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/water-soldier.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/water-soldier.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/water-soldier.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/common-spotted-orchid.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/common-spotted-orchid.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/common-spotted-orchid.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/f/f6/Dactylorhiza_fuchsii_LC0049.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/common-spotted-orchid.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/common-spotted-orchid.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/common-spotted-orchid.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/common-spotted-orchid.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/ragged-robin.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/ragged-robin.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/ragged-robin.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/1/1d/Silene_flos-cuculi_LC0044.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/ragged-robin.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/ragged-robin.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/ragged-robin.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/ragged-robin.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/great-burnet.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/great-burnet.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/great-burnet.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/3/37/Sanguisorba_officinalis_LC0174.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/great-burnet.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/great-burnet.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/great-burnet.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/great-burnet.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/tussock-sedge.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/tussock-sedge.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/tussock-sedge.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/a/ac/Carex_paniculata_kz2.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/tussock-sedge.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/tussock-sedge.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/tussock-sedge.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/tussock-sedge.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/oak-milkcap.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/oak-milkcap.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/oak-milkcap.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/d/df/Lactarius_quietus_2009_G2.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/oak-milkcap.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/oak-milkcap.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/oak-milkcap.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/oak-milkcap.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/beech-knight.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/beech-knight.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/beech-knight.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/1/14/Tricholoma_scalpturatum_2012_G5.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/beech-knight.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/beech-knight.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/beech-knight.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/beech-knight.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/penny-bun.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/penny-bun.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/penny-bun.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Boletus_edulis_IT.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/penny-bun.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/penny-bun.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/penny-bun.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/penny-bun.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/parrot-waxcap.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/parrot-waxcap.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/parrot-waxcap.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/e/e1/Gliophorus_psittacinus_2.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/parrot-waxcap.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/parrot-waxcap.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/parrot-waxcap.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/parrot-waxcap.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/earthstar.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/earthstar.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/earthstar.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/84/Geastrum_triplex_1.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/earthstar.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/earthstar.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/earthstar.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/earthstar.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/scarlet-elf-cup.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/scarlet-elf-cup.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/scarlet-elf-cup.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/4/4b/Sarcoscypha_coccinea.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/scarlet-elf-cup.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/scarlet-elf-cup.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/scarlet-elf-cup.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/scarlet-elf-cup.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/porcelain-fungus.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/porcelain-fungus.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/porcelain-fungus.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/c/c5/Porcelain_Fungus_%28Oudemansiella_mucida%29_%281%29.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/porcelain-fungus.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/porcelain-fungus.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/porcelain-fungus.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/porcelain-fungus.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/chicken-of-woods.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/chicken-of-woods.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/chicken-of-woods.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/7/7a/Laetiporus_sulphureus_2015_G1.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/chicken-of-woods.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/chicken-of-woods.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/chicken-of-woods.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/chicken-of-woods.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/shaggy-inkcap.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/shaggy-inkcap.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/shaggy-inkcap.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/d/d3/Coprinus_comatus_2011_G2.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/shaggy-inkcap.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/shaggy-inkcap.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/shaggy-inkcap.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/shaggy-inkcap.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/midlands-east"
if [ -f "nature/midlands-east/hares-ear.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/midlands-east/hares-ear.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/midlands-east/hares-ear.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/1/16/Otidea_onotica_2009_G2.jpg"
  if [ $? -eq 0 ] && [ -s "nature/midlands-east/hares-ear.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/midlands-east/hares-ear.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/midlands-east/hares-ear.jpg"
    echo "[$I/$TOTAL] FAIL  nature/midlands-east/hares-ear.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/nightingale.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/nightingale.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/nightingale.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/a/ac/Luscinia_megarhynchos_-_01.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/nightingale.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/nightingale.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/nightingale.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/nightingale.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/dormouse.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/dormouse.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/dormouse.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/8b/Muscardinus_avellanarius_%28cropped%29.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/dormouse.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/dormouse.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/dormouse.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/dormouse.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/adonis-blue.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/adonis-blue.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/adonis-blue.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/5/5f/Polyommatus_bellargus_male_-_Dorset.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/adonis-blue.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/adonis-blue.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/adonis-blue.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/adonis-blue.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/sand-lizard.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/sand-lizard.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/sand-lizard.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Lacerta_agilis_male.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/sand-lizard.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/sand-lizard.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/sand-lizard.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/sand-lizard.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/smooth-snake.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/smooth-snake.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/smooth-snake.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/2/22/Coronella_austriaca.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/smooth-snake.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/smooth-snake.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/smooth-snake.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/smooth-snake.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/turtle-dove.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/turtle-dove.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/turtle-dove.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/1/18/Streptopelia_turtur_-_01.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/turtle-dove.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/turtle-dove.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/turtle-dove.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/turtle-dove.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/smooth-newt.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/smooth-newt.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/smooth-newt.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/7/79/Lissotriton_vulgaris_01.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/smooth-newt.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/smooth-newt.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/smooth-newt.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/smooth-newt.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/grey-heron.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/grey-heron.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/grey-heron.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/0c/Grey_Heron_%28Ardea_cinerea%29_in_flight_-_Hamina_-_Finland.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/grey-heron.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/grey-heron.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/grey-heron.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/grey-heron.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/silver-spotted-skipper.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/silver-spotted-skipper.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/silver-spotted-skipper.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/e/e6/Hesperia_comma_male_-_Dorset.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/silver-spotted-skipper.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/silver-spotted-skipper.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/silver-spotted-skipper.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/silver-spotted-skipper.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/roe-deer.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/roe-deer.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/roe-deer.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/b/b3/Capreolus_capreolus_2_Jojo.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/roe-deer.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/roe-deer.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/roe-deer.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/roe-deer.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/dartford-warbler.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/dartford-warbler.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/dartford-warbler.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/3/31/Dartford_Warbler_%28Sylvia_undata%29.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/dartford-warbler.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/dartford-warbler.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/dartford-warbler.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/dartford-warbler.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/white-clawed-crayfish.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/white-clawed-crayfish.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/white-clawed-crayfish.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/7/79/Austropotamobius_pallipes.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/white-clawed-crayfish.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/white-clawed-crayfish.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/white-clawed-crayfish.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/white-clawed-crayfish.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/hobby.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/hobby.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/hobby.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/4/4a/Falco_subbuteo_-_01.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/hobby.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/hobby.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/hobby.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/hobby.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/bechsteins-bat.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/bechsteins-bat.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/bechsteins-bat.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/e/e9/Myotis_bechsteinii_1.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/bechsteins-bat.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/bechsteins-bat.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/bechsteins-bat.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/bechsteins-bat.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/spoonbill.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/spoonbill.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/spoonbill.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/8/85/Platalea_leucorodia_Spoonbill_1.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/spoonbill.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/spoonbill.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/spoonbill.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/spoonbill.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/early-spider-orchid.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/early-spider-orchid.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/early-spider-orchid.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/3/3b/Ophrys_sphegodes_-_Branscombe.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/early-spider-orchid.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/early-spider-orchid.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/early-spider-orchid.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/early-spider-orchid.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/wild-gladiolus.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/wild-gladiolus.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/wild-gladiolus.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/3/37/Gladiolus_illyricus.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/wild-gladiolus.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/wild-gladiolus.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/wild-gladiolus.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/wild-gladiolus.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/field-cow-wheat.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/field-cow-wheat.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/field-cow-wheat.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/3/32/Melampyrum_arvense.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/field-cow-wheat.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/field-cow-wheat.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/field-cow-wheat.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/field-cow-wheat.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/childing-pink.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/childing-pink.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/childing-pink.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/e/e0/Petrorhagia_nanteuilii.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/childing-pink.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/childing-pink.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/childing-pink.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/childing-pink.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/round-headed-rampion.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/round-headed-rampion.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/round-headed-rampion.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/d/d1/Phyteuma_orbiculare_LC0063.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/round-headed-rampion.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/round-headed-rampion.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/round-headed-rampion.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/round-headed-rampion.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/man-orchid.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/man-orchid.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/man-orchid.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/00/Orchis_anthropophora_LC0126.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/man-orchid.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/man-orchid.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/man-orchid.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/man-orchid.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/chalk-milkwort.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/chalk-milkwort.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/chalk-milkwort.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/d/d9/Polygala_calcarea_LC0024.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/chalk-milkwort.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/chalk-milkwort.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/chalk-milkwort.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/chalk-milkwort.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/sea-kale.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/sea-kale.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/sea-kale.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/4/43/Crambe_maritima_LC0018.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/sea-kale.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/sea-kale.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/sea-kale.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/sea-kale.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/yellow-horned-poppy.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/yellow-horned-poppy.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/yellow-horned-poppy.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/3/37/Glaucium_flavum_LC0083.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/yellow-horned-poppy.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/yellow-horned-poppy.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/yellow-horned-poppy.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/yellow-horned-poppy.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/pyramidal-orchid.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/pyramidal-orchid.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/pyramidal-orchid.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/d/d3/Anacamptis_pyramidalis_LC0095.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/pyramidal-orchid.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/pyramidal-orchid.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/pyramidal-orchid.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/pyramidal-orchid.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/sea-holly.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/sea-holly.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/sea-holly.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/d/da/Eryngium_maritimum_kz.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/sea-holly.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/sea-holly.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/sea-holly.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/sea-holly.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/bee-orchid.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/bee-orchid.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/bee-orchid.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/1/18/Ophrys_apifera_-_Malmsbury.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/bee-orchid.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/bee-orchid.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/bee-orchid.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/bee-orchid.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/lords-and-ladies.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/lords-and-ladies.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/lords-and-ladies.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/4/4a/Arum_maculatum_LC0113.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/lords-and-ladies.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/lords-and-ladies.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/lords-and-ladies.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/lords-and-ladies.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/common-rock-rose.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/common-rock-rose.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/common-rock-rose.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/5/53/Helianthemum_nummularium_LC0078.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/common-rock-rose.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/common-rock-rose.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/common-rock-rose.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/common-rock-rose.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/devils-bit-scabious.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/devils-bit-scabious.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/devils-bit-scabious.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/Succisa_pratensis_LC0064.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/devils-bit-scabious.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/devils-bit-scabious.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/devils-bit-scabious.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/devils-bit-scabious.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/amethyst-deceiver.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/amethyst-deceiver.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/amethyst-deceiver.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/3/3d/2009-10-11_Laccaria_amethystina_%28Huds.%29_Cooke_58993.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/amethyst-deceiver.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/amethyst-deceiver.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/amethyst-deceiver.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/amethyst-deceiver.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/death-cap.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/death-cap.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/death-cap.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Amanita_phalloides_1.JPG"
  if [ $? -eq 0 ] && [ -s "nature/south-england/death-cap.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/death-cap.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/death-cap.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/death-cap.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/lurid-bolete.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/lurid-bolete.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/lurid-bolete.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/9/9a/Suillellus_luridus_2009_G5.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/lurid-bolete.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/lurid-bolete.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/lurid-bolete.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/lurid-bolete.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/snowy-waxcap.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/snowy-waxcap.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/snowy-waxcap.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/7/75/Cuphophyllus_virgineus_2009_G2.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/snowy-waxcap.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/snowy-waxcap.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/snowy-waxcap.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/snowy-waxcap.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/honey-fungus.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/honey-fungus.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/honey-fungus.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/7/74/Armillaria_mellea_2012_G2.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/honey-fungus.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/honey-fungus.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/honey-fungus.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/honey-fungus.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/penny-bun.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/penny-bun.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/penny-bun.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Boletus_edulis_IT.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/penny-bun.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/penny-bun.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/penny-bun.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/penny-bun.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/porcelain-fungus.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/porcelain-fungus.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/porcelain-fungus.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/c/c5/Porcelain_Fungus_%28Oudemansiella_mucida%29_%281%29.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/porcelain-fungus.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/porcelain-fungus.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/porcelain-fungus.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/porcelain-fungus.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/chicken-of-woods.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/chicken-of-woods.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/chicken-of-woods.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/7/7a/Laetiporus_sulphureus_2015_G1.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/chicken-of-woods.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/chicken-of-woods.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/chicken-of-woods.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/chicken-of-woods.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/yellow-stagshorn.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/yellow-stagshorn.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/yellow-stagshorn.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/9/97/Calocera_viscosa_2009_G2.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/yellow-stagshorn.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/yellow-stagshorn.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/yellow-stagshorn.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/yellow-stagshorn.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

I=$((I+1))
mkdir -p "nature/south-england"
if [ -f "nature/south-england/beefsteak-fungus.jpg" ]; then
  echo "[$I/$TOTAL] SKIP  nature/south-england/beefsteak-fungus.jpg"
  SKIP=$((SKIP+1))
else
  curl -s -L --max-time 20 \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36" \
    -H "Referer: https://commons.wikimedia.org/" \
    -o "nature/south-england/beefsteak-fungus.jpg" \
    "https://upload.wikimedia.org/wikipedia/commons/9/9d/Fistulina_hepatica_2010_G5.jpg"
  if [ $? -eq 0 ] && [ -s "nature/south-england/beefsteak-fungus.jpg" ]; then
    echo "[$I/$TOTAL] OK    nature/south-england/beefsteak-fungus.jpg"
    SUCCESS=$((SUCCESS+1))
  else
    rm -f "nature/south-england/beefsteak-fungus.jpg"
    echo "[$I/$TOTAL] FAIL  nature/south-england/beefsteak-fungus.jpg"
    FAIL=$((FAIL+1))
  fi
  sleep 0.3
fi

echo ""
echo "Done: $SUCCESS downloaded, $SKIP skipped, $FAIL failed"