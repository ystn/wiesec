import os

from django.utils import timezone


def rename_image(instance, filename):
    # Get the file extension
    ext = filename.split(".")[-1]

    # Create a new filename (e.g., using the user ID and a timestamp)
    new_filename = f"{instance.user.id}_{timezone.now().strftime('%Y%m%d%H%M%S')}.{ext}"

    # Return the new path where the image will be saved
    return os.path.join("uploads/images/", new_filename)
