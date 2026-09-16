"""Run from repository root; optional handoff ZIP/XLSX remain outside Git."""
import json, collections, zipfile, re, xml.etree.ElementTree as E
from pathlib import Path
p=Path('public/airport-climate/data/airports.json'); rows=json.loads(p.read_text())
assert len(rows)==30 and len({r['id'] for r in rows})==30
assert collections.Counter(r['prominence_score'] for r in rows)=={0:4,1:14,2:8,3:4}
for r in rows:
 assert -180<=r['longitude']<=180 and -90<=r['latitude']<=90
 assert all(re.match(r'https?://',r[k]) for k in ['project_source','climate_source'])
 if r['country'] not in ['United Kingdom','UK','Singapore']:assert r['international_aviation_included']=='Not explicit in reviewed handoff'
assert '—' not in Path('src/pages/blog/airport-climate.md').read_text()
archive=Path('../airport-climate-implementation.zip');book=Path('../airport_expansion_climate_comparison_v3_analysis.xlsx')
if archive.exists() and book.exists():
 original=json.loads(zipfile.ZipFile(archive).read(str(p)))
 z=zipfile.ZipFile(book);ns={'m':'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
 strings=[]
 if 'xl/sharedStrings.xml' in z.namelist():strings=[''.join(n.itertext()) for n in E.fromstring(z.read('xl/sharedStrings.xml'))]
 sheet=E.fromstring(z.read('xl/worksheets/sheet1.xml'));data=[]
 for row in sheet.findall('.//m:row',ns)[1:]:
  values={}
  for c in row.findall('m:c',ns):
   v=c.find('m:v',ns);t=c.get('t');value=''.join(c.find('m:is',ns).itertext()) if t=='inlineStr' else (v.text if v is not None else '')
   values[re.sub(r'\d','',c.get('r'))]=strings[int(value)] if t=='s' else value
  data.append(values)
 fields=['city','country','project','expansion_type','status','capacity','national_climate_goal','aviation_climate_goal','climate_debate',None,'evidence_note','interpretation','confidence','project_source','climate_source']
 assert len(data)==30
 for r,row in zip(original,data):
  for i,k in enumerate(fields):
   if k:assert r[k]==row[chr(65+i)],(r['id'],k)
  assert r['prominence_score']==int(row['J'][0])
 expected={r['id']:dict(r) for r in original}
 for a in json.loads(Path('docs/data-amendments.json').read_text()):
  assert expected[a['id']].get(a['field'])==a['before']
  expected[a['id']][a['field']]=a['after']
 assert rows==list(expected.values())
 print('PASS all 30 workbook rows / 15 fields; all current differences explicitly recorded')
print('PASS IDs, coordinates, source URLs, coding counts, unknown aviation inclusion, no em dashes')
