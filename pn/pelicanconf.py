AUTHOR = "quinoto"
SITENAME = "Praderas Nativas"
SITEURL = ""

PATH = "content"

TIMEZONE = "America/Argentina/Buenos_Aires"

DEFAULT_LANG = "en"

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (
    ("Pelican", "https://getpelican.com/"),
    ("Python.org", "https://www.python.org/"),
    ("Jinja2", "https://palletsprojects.com/p/jinja/"),
    ("You can modify those links in your config file", "#"),
)

# Social widget
SOCIAL = (
    ("You can add links in your config file", "#"),
    ("Another social link", "#"),
)

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True

INDEX_SAVE_AS = ""
PAGE_PATHS = ["pages"]
STATIC_PATHS = ["static"]
DELETE_OUTPUT_DIRECTORY = True
THEME_TEMPLATES_OVERRIDES = ["templates"]
TEMPLATE_PAGES = {
    "index.html": "index.html",
    "base.html": "templates/base.html",
}
JINJA_ENVIRONMENT = {
    "extensions": ["jinja2.ext.i18n"],
}
