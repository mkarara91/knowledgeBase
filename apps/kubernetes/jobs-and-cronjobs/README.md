Jobs
- creates a pod that performs a task or batch process
- unlike standard pods, a job does not run indefinitely
- a job can be configured to run multiple pods in parallel
- successful completions are tracked
- once the job is deleted its pods are removed

Cron format

*                *            *                        *                        *
min(0-59)/step   hour (0-23)  day of the month (1-31)  month(1-12) or jan, feb  day of the week (0-6)

cron tab guru


Jobs