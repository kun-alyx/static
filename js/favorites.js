function on_change_favorite_type(a){if(a){var n=a.value;n&&(window.location="/favorites?type="+n)}}function on_change_filters(a,n){if(n){var o=n.value,e=window.location.search,i=new URLSearchParams(e);i.set(a,o),window.location.search=i.toString()}}