import re

# Update services/page.tsx
file_path = 'src/app/services/page.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'"use client";\nimport { motion } from "framer-motion";\n', '', content)
content = re.sub(r'const r = \(.*?\n\};\n', '', content, flags=re.DOTALL)
content = re.sub(r'const iconPop = \{.*?\n\};\n', '', content, flags=re.DOTALL)
content = content.replace('<motion.div {...r()}', '<div')
content = content.replace('</motion.div>', '</div>')
content = content.replace('<motion.span {...iconPop}', '<span')
content = content.replace('</motion.span>', '</span>')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

# Update pricing/page.tsx
file_path2 = 'src/app/pricing/page.tsx'
with open(file_path2, 'r', encoding='utf-8') as f:
    content2 = f.read()

content2 = re.sub(r'import { motion } from "framer-motion";\n', '', content2)
content2 = re.sub(r'const r = \(.*?\}\);\n', '', content2, flags=re.DOTALL)
content2 = content2.replace('<motion.div {...r()}', '<div')
content2 = content2.replace('</motion.div>', '</div>')

with open(file_path2, 'w', encoding='utf-8') as f:
    f.write(content2)

# Update globals.css
file_path3 = 'src/app/globals.css'
with open(file_path3, 'r', encoding='utf-8') as f:
    content3 = f.read()

content3 = re.sub(r'/\* Grain overlay \*/\nbody::before \{.*?\n\}\n', '', content3, flags=re.DOTALL)
content3 = content3.replace(
    'background:rgba(255,77,141,.12); border:1px solid rgba(255,77,141,.3);',
    'background:rgba(124,77,255,.12); border:1px solid rgba(124,77,255,.3);'
).replace(
    'color:var(--pk2);',
    'color:var(--p3);'
)

with open(file_path3, 'w', encoding='utf-8') as f:
    f.write(content3)
