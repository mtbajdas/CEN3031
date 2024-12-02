import pandas as pd
from jinja2 import Template



path = "UF Clinder Data.xlsx"
#organize columns
columns = ["Organization","Categories","Description"]
pd.set_option('display.max_colwidth', None)
sheet = pd.read_excel(path, usecols=columns)

#function for valid function name for jsx and file name
def validName(name):
    for c in name:
        if not c.isalpha() and c != '_' and not c.isdigit():
            name = name.replace(c, '_')
    name = name[:254]
    return name


#going through each row and creating the page
for name, row in sheet.iterrows():

    #creating initial template for each jsx file
    page_template = Template("""import React from 'react'
                            

    const ${{ valid }}Page = () =>{
        return(
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8 mt-12">
                <h1 className="text-4xl font-bold text-center text-slate-700 mb-4">
                    {{ org }}
                </h1>
                <h2 className="text-xl font-bold text-center text-slate-600 mb-4">
                    {{cat}}
                </h2>
            <div className="h-1 bg-slate-500 rounded-full w-24 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
                {{desc}}
            </p>
            <div className="flex justify-center">
                <button className="m-2 bg-slate-200 active:bg-black hover:bg-slate-400">Add</button>
            </div>
        </div>
        )
    }

    export default  ${{ valid }}Page;
    """
    )

    #replacing each value within template
    render_page = page_template.render(org = row['Organization'], cat = row['Categories'] if not pd.isna(row['Categories']) else "", desc = row['Description'] if not pd.isna(row['Description']) else "", valid = validName(row['Organization']))
    #writing the actual page
    with open(f"{validName(row['Organization'])}.jsx", "w", encoding="utf-8") as file:
        file.write(render_page)