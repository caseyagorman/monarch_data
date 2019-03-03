
import server
import unittest


class TestFlaskRoutes(unittest.TestCase):
    """Test Flask routes."""

    def test_index(self):
        """Make sure index page returns correct HTML."""

        # Create a test client
        client = server.app.test_client()

        # Use the test client to make requests
        result = client.get('/')

        # Compare result.data with assert method
        self.assertIn(b'welcome!', result.data)
