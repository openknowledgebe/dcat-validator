The DCAT-Editor provides three components:

* a web based editor for editing Dataset descriptions based on the DCAT W3C standard.
* a web based validator where user can copy and paste their DCAT expression and check if things are missing.
* a web-service validator that can be called programmatically and yield a report in JSON.
  
All three components are based on the [RDForms library](http://rdforms.org/) that controls what is edited / validated by means of 
a template. By providing a different template the editor / validation can easily be adapted to new needs. 
For instance, to better accomodate the needs of another organization or national portal for datasets. 
The template provided is based on the needs of the Swedish öppnadata.se portal.

The DCAT-Editor is licensed under GNU LESSER GENERAL PUBLIC LICENSE (LGPL).