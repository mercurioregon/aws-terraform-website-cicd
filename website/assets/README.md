# crc_1
Cloud Resume Challenge - HTML, CSS

Day 1 -

Opened a GitHub repository using notes from my BootCamp.  The HTML/CSS file is “crc_1”. I opened VS code. Named two files main.html and style.css.  Since there are only two files, I am not making a branch.  Made first commit.

Completed initial styling and brought over text from my work resume.  The first two pages need a little cleaning up, but they are complete.  Committed to GitHub.

Day 2 - 

Created root account and an S3 bucket in Us-Oregon. Enabled static website hosting.  Successfully created a bucket policy.

Obtained 404 error when pulling up site through S3.  Went to CloudFront and set up an account to enable HTTPS.  Registered a domain name through Route 53 to point to the bucket. 

(Running into issues with the DNS not pulling up the site.  I have to review instructions for Route 53 and CloudFront to resolve.)

Day 3 -

Pulled up notes for a JavaScript website counter from my bootcamp.  After an hour of trying to recreate and old project, I found a much simpler way that save to local storage.  The counter is function and on the site.

Created A record in Route 53 for CloudFront distribution.

Day 4 -

Solved DNS issue.  My S3 bucket name did not match the target.  The domain name now pulls up an XML error, but the page is there.  Progress.

Day 5 -

Domain still does not pull up proper page. Added JavaScipt to S# bucket and checked for associations to the index file.  Started a DynamoDb table to explore the console.  I am looking for instructions to us the CLI to connect my counter to the table.

The Cloud Resume Challenge Guidebook - Forrest Brazeal
Ultimate AWS Certified Solutions Architect Course - Udemy.com
