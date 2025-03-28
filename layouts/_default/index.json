{{- $index := slice -}}
{{- range where .Site.Pages "Kind" "page" -}}
  {{- $page := . -}}
  {{- $content := .Plain -}}
  {{- $index = $index | append (dict "url" $page.RelPermalink "title" $page.Title "content" $content) -}}
{{- end -}}
{{- $index | jsonify -}}
