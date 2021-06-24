from gensim import summarization

content = "Microsoft held talks in the past few weeks " + \
    "to acquire software developer platform GitHub, Business " + \
    "Insider reports. One person familiar with the discussions " + \
    "between the companies told CNBC that they had been " + \
    "considering a joint marketing partnership valued around " + \
    "$35 million, and that those discussions had progressed to " + \
    "a possible investment or outright acquisition. It is " + \
    "unclear whether talks are still ongoing, but this " + \
    "person said that GitHub's price for a full acquisition " + \
    "was more than Microsoft currently wanted to pay. GitHub " + \
    "was last valued at $2 billion in its last funding round " + \
    "2015, but the price tag for an acquisition could be $5 " + \
    "billion or more, based on a price that was floated " + \
    "last year. GitHub's tools have become essential to " + \
    "software developers, who use it to store code, " + \
    "keep track of updates and discuss issues. The privately " + \
    "held company has more than 23 million individual users in " + \
    "more than 1.5 million organizations. It was on track to " + \
    "book more than $200 million in subscription revenue, " + \
    "including more than $110 million from companies using its " + \
    "enterprise product, GitHub told CNBC last fall.Microsoft " + \
    "has reportedly flirted with buying GitHub in the past, " + \
    "including in 2016, although GitHub denied those " + \
    "reports. A partnership would give Microsoft another " + \
    "connection point to the developers it needs to court to " + \
    "build applications on its various platforms, including " + \
    "the Azure cloud. Microsoft could also use data from " + \
    "GitHub to improve its artificial intelligence " + \
    "producs. The talks come amid GitHub's struggle to " + \
    "replace CEO and founder Chris Wanstrath, who stepped " + \
    "down 10 months ago. Business Insider reported that " + \
    "Microsoft exec Nat Friedman -- who previously " + \
    "ran Xamarin, a developer tools start-up that Microsoft " + \
    "acquired in 2016 -- may take that CEO role. Google's " + \
    "senior VP of ads and commerce, Sridhar Ramaswamy, has " + \
    "also been in discussions for the job, says the report. " + \
    "Microsoft declined to comment on the report. " + \
    "GitHub did not immediately return a request for comment."

def summary(text:str) -> str:
    if len(text.split('.')) < 10: return "text should be more than 10 sentences"
    summarized_content = "short summary:\n"
    summarized_content += summarization.summarize(text, ratio=0.3)
    summarized_content += "\n\n=========================\n\ndetailed summary:\n"
    summarized_content += summarization.summarize(text, ratio=0.7)
    return summarized_content

def summ_keywords(text:str) -> str:
    keywords = summarization.keywords(text)
    if keywords == "": return "text content is too less to detect any keywords."
    return keywords

content1 = """
Microsoft held talks in the past few weeks to acquire software developer platform GitHub, Business Insider reports. One person familiar with the discussions between the companies told CNBC that they had been considering a joint marketing partnership valued around 
  $35 million, and that those discussions had progressed to a possible investment or outright acquisition. It is unclear whether talks are still ongoing, but this person said that GitHub's price for a full acquisition was more than Microsoft currently wanted to pay. GitHub was last valued at $2 billion in its last funding roun 2015, but the price tag for an acquisition could be $5billion or more, based on a price that was floated last year. GitHub's tools have become essential to software developers, who use it to store code, keep track of updates and discuss issues. The privately held company has more than 23 million individual users in more than 1.5 million organizations. It was on track to 
  book more than $200 million in subscription revenue, including more than $110 million from companies using its 
    enterprise product, GitHub told CNBC last fall.Microsoft 
    has reportedly flirted with buying GitHub in the past, 
   including in 2016, although GitHub denied those
 reports. A partnership would give Microsoft another 
  connection point to the developers it needs to court to 
    "build applications on its various platforms, including 
    "the Azure cloud. Microsoft could also use data from 
   GitHub to improve its artificial intelligence 
producs. The talks come amid GitHub's struggle to 
replace CEO and founder Chris Wanstrath, who stepped 
    down 10 months ago. Business Insider reported that 
 Microsoft exec Nat Friedman -- who previously 
 ran Xamarin, a developer tools start-up that Microsoft 
  acquired in 2016 -- may take that CEO role. Google's 
    senior VP of ads and commerce, Sridhar Ramaswamy, has 
    also been in discussions for the job, says the report. 
    Microsoft declined to comment on the report. 
    GitHub did not immediately return a request for comment.
"""