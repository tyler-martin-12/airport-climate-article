"""Validate the example arithmetic and prevent route/sector accounting conflation."""
import json, math, re
from pathlib import Path
p = json.loads(Path('public/airport-climate/data/aviation-pathway.json').read_text())
f = p['flight']
a, b = f['coordinates']['LHR'], f['coordinates']['JFK']
lat1, lat2 = map(math.radians, [a[0], b[0]])
dlon = math.radians(b[1] - a[1])
distance = 6371.0088 * 2 * math.asin(math.sqrt(math.sin((lat2-lat1)/2)**2 + math.cos(lat1)*math.cos(lat2)*math.sin(dlon/2)**2))
assert math.isclose(distance, f['distance_km'], abs_tol=.001)
assert math.isclose(distance*f['factor'], f['kg_co2'], abs_tol=.001)
assert f['display_kg_co2'] == round(f['kg_co2']/10)*10 == 380
assert f['factor_cell'] == 'Business travel- air!J28'
assert f['distance_uplift_already_in_factor'] == .08
assert p['pathway']['route_forecast_kg'] is None
assert sum(s['percent'] for s in p['pathway']['segments']) == 100
html = Path('dist/blog/airport-climate/index.html').read_text()
for segment in p['pathway']['segments']:
    assert f'class="pathway-{segment["key"]}" style="width:{segment["percent"]}%"' in html
assert 'Different scale: sector-wide shares, not kilograms for this flight.' in html
assert 'neither a route forecast nor a percentage reduction from the 380 kg above' in html
assert 'it is not added twice' in html
assert 'not the journey’s full climate footprint' in html
assert 'CCC, chapters 2–3</a>' in html
assert '<p>&lt;' not in html
print('PASS baseline calculation, single distance uplift, rounding, reconciled sector shares and explicit accounting boundaries')
