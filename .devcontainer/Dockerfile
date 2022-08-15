# Create a variable with a default value of 2.7
ARG VARIANT=2.7

# Use the official Ruby container
ARG VARIANT=14.9
FROM node:${VARIANT}

# Variables that will setup a non-root user.
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Copy my devcontainer setup script to the container
COPY scripts/setup.sh /tmp/scripts/

# Run commands to setup the container
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    # Remove imagemagick due to https://security-tracker.debian.org/tracker/CVE-2019-10131
    && apt-get purge -y imagemagick imagemagick-6-common \
    # Install common packages, non-root user, rvm, core build tools
    && bash /tmp/scripts/setup.sh "${USERNAME}" "${USER_UID}" "${USER_GID}" \
    && apt-get autoremove -y && apt-get clean -y && rm -rf /var/lib/apt/lists/* /tmp/scripts
